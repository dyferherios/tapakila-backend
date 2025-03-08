create table if not exists ticket(
    id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
    event_id UUID references event(id) on delete cascade,
    ticket_type_id UUID references ticket_type(id) on delete cascade,
    user_id UUID references "user"(id) on delete cascade,
    ticket_number varchar(200),
    amount_paid bigint check (amount_paid >= 0),
    currency_id UUID references currency(id) on delete cascade,
    payment_confirmed boolean,
    created_at timestamp,
    updated_at timestamp,
    deleted_at timestamp
);