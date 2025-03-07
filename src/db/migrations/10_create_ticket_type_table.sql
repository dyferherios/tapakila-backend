create table if not exists ticket_type(
    id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
    event_id UUID references "event"(id) on delete cascade,
    title varchar(100),
    slug varchar(100),
    description text,
    available_ticket bigint check (available_ticket >= 0),
    price bigint check (price >= 0),
    currency_id UUID references currency(id) on delete cascade,
    created_at timestamp,
    updated_at timestamp,
    deleted_at timestamp
);