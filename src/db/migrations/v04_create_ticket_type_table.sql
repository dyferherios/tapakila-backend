create table if not exists ticket_type(
    id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
    type ticket,
    price bigint check (price >= 0),
    number bigint check (number >=0)
);