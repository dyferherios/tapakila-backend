create table if not exists ticket(
    id char(26) primary key,
    ticket_type_id char(26) references ticket_type(id) on delete cascade,
    user_id char(26) references "user"(id) on delete cascade,
    ticket_number varchar(200),
    amount_paid bigint check (amount_paid >= 0),
    currency_id char(26) references currency(id) on delete cascade,
    payment_confirmed boolean,
    created_at timestamp,
    updated_at timestamp,
    deleted_at timestamp
);