CREATE EXTENSION IF NOT EXISTS pgulid;

create table if not exists "role"(
    id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
    title varchar(100),
    created_at timestamp,
    updated_at timestamp
);