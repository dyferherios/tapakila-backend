create table if not exists host(
    id char(26) primary key,
    name varchar(100),
    description text,
    created_at timestamp,
    updated_at timestamp,
    deleted_at timestamp
);