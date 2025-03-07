create table if not exists newsletter(
    id UUID primary key default uuid_generate_v4(),
    name varchar(100),
    email varchar(100),
    created_at timestamp,
    updated_at timestamp,
    deleted_at timestamp
);