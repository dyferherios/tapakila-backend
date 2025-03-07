import pkg from 'pg';
const { Pool } = pkg;
const datasource = new Pool({
  user: 'dyferherios',
  host: 'localhost',
  database: 'ticket_place',
  password: 'dyFer1823*db',
  port: 5432,
});

export default datasource;
