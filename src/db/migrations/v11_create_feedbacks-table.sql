create table if not exists feedbacks(
    id char(26) primary key,
    user_id char(26) references "user"(id) on delete cascade,
    subject varchar(200),
    message text,
    created_at timestamp,
    updated_at timestamp,
    deleted_at timestamp
);