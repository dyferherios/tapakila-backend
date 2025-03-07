create table if not exists currency(
    id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
    title varchar(100),
    description text,
    created_at timestamp,
    updated_at timestamp,
    deleted_at timestamp
);