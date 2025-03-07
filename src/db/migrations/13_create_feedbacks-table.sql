create table if not exists feedbacks(
    id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
    user_id UUID references "user"(id) on delete cascade,
    subject varchar(200),
    message text,
    created_at timestamp,
    updated_at timestamp,
    deleted_at timestamp
);