create table if not exists ticket_verification(
    id char(26) primary key,
    ticket_id char(26) references ticket(id) on delete cascade,
    user_id char(26) references "user"(id) on delete cascade,
    payment_confirmed boolean,
    created_at timestamp,
    updated_at timestamp,
    deleted_at timestamp
);
