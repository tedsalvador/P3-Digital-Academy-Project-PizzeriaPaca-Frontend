<script setup>
import { ref } from 'vue';
import jsPDF from 'jspdf';

const orders = ref([
  { id: 1, customer: 'Cliente 1', status: 'Pendiente', amount: 100 },
  { id: 2, customer: 'Cliente 2', status: 'Pendiente', amount: 200 },
  { id: 3, customer: 'Cliente 3', status: 'Pendiente', amount: 400 },
  { id: 4, customer: 'Cliente 4', status: 'Pendiente', amount: 600 },
]);

const invoices = ref([]);

const markAsPaid = (orderId) => {
  const orderIndex = orders.value.findIndex((order) => order.id === orderId);
  if (orderIndex !== -1) {
    const order = orders.value[orderIndex];
    order.status = 'Pagado';
    invoices.value.push({ ...order });
    orders.value.splice(orderIndex, 1);
  }
};

const generateInvoice = (invoice) => {
  const doc = new jsPDF();
  doc.text(`Factura para ${invoice.customer}`, 10, 10);
  doc.text(`ID del pedido: ${invoice.id}`, 10, 20);
  doc.text(`Estado: ${invoice.status}`, 10, 30);
  doc.text(`Monto: $${invoice.amount}`, 10, 40);
  doc.save(`factura-${invoice.id}.pdf`);
};
</script>

<template>
  <div>
    <div class="sales-container">
      <div class="sales-card">
        <h3>Ventas Diarias</h3>
        <p>300</p>
      </div>
      <div class="sales-card">
        <h3>Ventas Mensuales</h3>
        <p>10000</p>
      </div>
      <div class="sales-card">
        <h3>Ventas Trimestrales</h3>
        <p>25000</p>
      </div>
      <div class="sales-card">
        <h3>Ventas Anuales</h3>
        <p>100000</p>
      </div>
    </div>

    <div class="table-container active-orders">
      <h1>Pedidos Activos</h1>
      <table class="order-table">
        <thead>
          <tr>
            <th>ID</th>
            <th>Cliente</th>
            <th>Estado</th>
            <th>Total</th>
            <th>Acciones</th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="order in orders" :key="order.id">
            <td>{{ order.id }}</td>
            <td>{{ order.customer }}</td>
            <td>
              <span :class="['status', order.status.toLowerCase().replace(' ', '-')]">
                {{ order.status }}
              </span>
            </td>
            <td>{{ order.amount }}</td>
            <td>
              <button class="add-button" @click="markAsPaid(order.id)">Marcar como pagado</button>
            </td>
          </tr>
        </tbody>
      </table>
    </div>

    <div class="table-container invoiced-orders">
      <h1>Pedidos Facturados</h1>
      <table class="order-table">
        <thead>
          <tr>
            <th>ID</th>
            <th>Cliente</th>
            <th>Estado</th>
            <th>Total</th>
            <th>Factura</th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="invoice in invoices" :key="invoice.id">
            <td>{{ invoice.id }}</td>
            <td>{{ invoice.customer }}</td>
            <td>
              <span :class="['status', invoice.status.toLowerCase().replace(' ', '-')]">
                {{ invoice.status }}
              </span>
            </td>
            <td>{{ invoice.amount }}</td>
            <td>
              <button class="add-button" @click="generateInvoice(invoice)">Descargar PDF</button>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  </div>
</template>

<style scoped>

.sales-container {
  display: flex;
  justify-content: center; 
  gap: 20px;
  margin-bottom: 20px;
  overflow-x: auto;
  padding-left: 0px;
  padding-right: 10px;
  margin: 10px 40px 30px;
  
}

.sales-card {
  background-color: rgba(255, 255, 255, 0.9);
  border-radius: 8px;
  box-shadow: 0px 2px 5px rgba(0, 0, 0, 0.1);
  padding: 20px 20px 10px 10px;
  text-align: center;
  min-width: 200px;
  flex-shrink: 0; 
}

.sales-card:first-child {
  margin-left: 0;
}

.sales-card:last-child {
  margin-right: 10px;
}

.sales-card h3 {
  font-size: 24px;
  margin-bottom: 5px;
  font-weight: bold;
}

.sales-card p {
  font-size: 18px;
  font-weight: bold;
}

.table-container {
  max-width: 100%;
  margin-left: 90px !important;
  margin-right: 80px !important;
  background-color: rgba(255, 255, 255, 0.9);
  border-radius: 12px;
  padding: 0px 30px 30px;
  box-shadow: 0 6px 12px rgba(0, 0, 0, 0.15);
  overflow-x: auto;
  text-align: center;
}

.active-orders {
  margin-bottom: 40px;
}

.invoiced-orders {
  margin-top: 40px;
}

.order-table {
  width: 100%;
  border-collapse: collapse;
  text-align: center;
  
}

.order-table th, .order-table td {
  padding: 14px 20px;
  text-align: center;
  border-bottom: 1px solid #ddd;
  font-size: 20px;
  
  
}

.order-table th {
  background-color: #f4f4f4;
  font-weight: bold;
  font-size: 20px;
  text-align: center;
 
}

.status {
  padding: 8px 15px;
  border-radius: 20px;
  font-weight: bold;
  font-size: 20px;
  text-align: center;
}

.status.pendiente {
  background-color: #ffcc00;
  color: white;
}

.status.pagado {
  background-color: #86e49d;
  color: white;
}

tbody tr:nth-child(even) {
  background-color: rgba(0, 0, 0, 0.05);
}

tbody tr:hover {
  background-color: rgba(0, 0, 0, 0.1);
}

.add-button {
  background-color: #4CAF50;
  color: white;
  padding: 10px 20px;
  border: none;
  border-radius: 5px;
  cursor: pointer;
  font-size: 16px;
}

.add-button:hover {
  background-color: #45a049;
}



@media (max-width: 1024px) {
  .sales-container {
    justify-content: flex-start; 
    padding-left: 15px;
    padding-right: 15px;
   
  }

  .table-container{
    margin: 40px 20px 20px;
  }


  .sales-card {
    min-width: 160px;
  }

}


@media (max-width: 768px) {
  .table-container{
    margin: 10px 30px 30px;
  }
  
  .sales-container {
    flex-wrap: nowrap;
    overflow-x: auto;
    justify-content: flex-start;
    padding-left: 5px;
    padding-right: 15px;
    margin: 10px 30px 30px;
    
  }

  .sales-card {
    min-width: 140px;
    width: auto;
  }

  .sales-card h3 {
    font-size: 16px;
  }

  .sales-card p {
    font-size: 14px;
  }

  .order-table th, .order-table td {
    font-size: 14px;
    padding: 10px;
    
  }

  .add-button {
    padding: 8px 16px;
    font-size: 14px;
  }
}

@media (max-width: 480px) {
  .table-container{
    margin: 0px 30px 20px !important;
  }
  
  .sales-container {
    flex-wrap: nowrap;
    overflow-x: auto;
    justify-content: flex-start;
    padding-left: 5px;
    padding-right: 15px;
   
    
  }

  .sales-card {
    min-width: 140px;
    width: auto;
  }

  .sales-card h3 {
    font-size: 16px;
  }

  .sales-card p {
    font-size: 14px;
  }

  .order-table th, .order-table td {
    font-size: 14px;
    padding: 10px;
    
  }

  .add-button {
    padding: 8px 16px;
    font-size: 14px;
  }
}

@media (min-width: 1024px) {
  .table-container{
    margin: 10px 70px 30px !important;
  }
  .sales-container {
    justify-content: center; 
    padding-left: 0px;
    padding-right: 30px;
    margin: 10px 30px 30px;
  }

  .sales-card {
    min-width: 220px;
  }
}
</style>
