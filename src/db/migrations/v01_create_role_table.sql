CREATE EXTENSION IF NOT EXISTS pgulid;

create table if not exists "role"(
    id char(26) primary key,
    title varchar(100),
    created_at timestamp,
    updated_at timestamp
);