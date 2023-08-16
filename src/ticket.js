document.addEventListener('DOMContentLoaded', function () {
    const ticketTypeSelect = document.getElementById('ticketType');
    const ticketDetails = document.getElementById('ticketDetails');
    const successMessage = document.getElementById('successMessage');
    const submitButton = document.getElementById('submitTicket');
    const clearTicketsButton = document.getElementById('clearTickets');
  
    ticketTypeSelect.addEventListener('change', function () {
      if (ticketTypeSelect.value !== '') {
        ticketDetails.style.display = 'block';
      } else {
        ticketDetails.style.display = 'none';
      }
    });
  
    // Solicitar o ID do administrador
     const allowedAdminId = 180539;
    const enteredAdminId = prompt('Digite o seu ID:');
  
    if (enteredAdminId && parseInt(enteredAdminId) === allowedAdminId) {
      clearTicketsButton.style.display = 'block';
    } else {
      clearTicketsButton.style.display = 'none';
    }
  
    submitButton.addEventListener('click', function () {
      const userName = document.getElementById('userName').value;
      const issueDetails = document.getElementById('issueDetails').value;
      const discordName = document.getElementById('discordName').value;
  
      const ticketData = {
        ticketType: ticketTypeSelect.value,
        userName: userName,
        issueDetails: issueDetails,
        discordName: discordName,
      };
  
      saveTicket(ticketData);
      ticketDetails.style.display = 'none';
      successMessage.style.display = 'block';
    });
  
    clearTicketsButton.addEventListener('click', function () {
      clearTickets();
    });
  
    // Carregar informações de ticket ao carregar a página
    loadTicketData();
  });
  
  function saveTicket(ticketData) {
    const tickets = JSON.parse(localStorage.getItem('tickets')) || [];
    tickets.push(ticketData);
    localStorage.setItem('tickets', JSON.stringify(tickets));
  }
  
  function loadTicketData() {
    const tickets = JSON.parse(localStorage.getItem('tickets')) || [];
    
    // Exemplo de como você pode listar as informações de ticket no console
    console.log('Informações de Ticket:');
    tickets.forEach((ticket, index) => {
      console.log(`Ticket ${index + 1}:`);
      console.log('Tipo:', ticket.ticketType);
      console.log('Nome do Usuário:', ticket.userName);
      console.log('Detalhes do Problema:', ticket.issueDetails);
      console.log('Nome no Discord:', ticket.discordName);
    });
  }
  
  function clearTickets() {
    localStorage.removeItem('tickets');
    console.log('Tickets limpos.');
  }
  