create table if not exists ticket_verification(
    id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
    ticket_id UUID references ticket(id) on delete cascade,
    user_id UUID references "user"(id) on delete cascade,
    payment_confirmed boolean,
    created_at timestamp,
    updated_at timestamp,
    deleted_at timestamp
);
