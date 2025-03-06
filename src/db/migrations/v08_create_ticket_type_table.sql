create table if not exists ticket_type(
    id char(26)  primary key,
    event_id char(26) references "event"(id) on delete cascade,
    title varchar(100),
    slug varchar(100),
    description text,
    available_ticket bigint check (available_ticket >= 0),
    price bigint check (price >= 0),
    currency_id char(26) references currency(id) on delete cascade,
    created_at timestamp,
    updated_at timestamp,
    deleted_at timestamp
);