// server.js
const express = require('express');
const app = express();
const port = 3000;

// Sample ticket data
const tickets = [
  { id: 1, title: 'Issue 1', status: 'Open', priority: 'High' },
  { id: 2, title: 'Issue 2', status: 'Closed', priority: 'Low' },
  { id: 3, title: 'Issue 3', status: 'Open', priority: 'Medium' },
];

// Root route
app.get('/', (req, res) => {
  res.send('Welcome to GlobalTech Solutions!');
});

// Route to get tickets with query parameters
app.get('/tickets', (req, res) => {
  const { status, priority } = req.query;
  let filteredTickets = tickets;

  if (status) {
    filteredTickets = filteredTickets.filter(ticket => ticket.status === status);
  }

  if (priority) {
    filteredTickets = filteredTickets.filter(ticket => ticket.priority === priority);
  }

  res.json(filteredTickets);
});

// Error handling middleware for 404
app.use((req, res, next) => {
  res.status(404).send('Page Not Found');
});

// Start the server
app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});
