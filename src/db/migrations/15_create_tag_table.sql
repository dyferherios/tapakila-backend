create table if not exists tag(
    id UUID primary key default uuid_generate_v4(),
    title varchar(100),
    description text,
    created_at timestamp,
    updated_at timestamp,
    deleted_at timestamp
);