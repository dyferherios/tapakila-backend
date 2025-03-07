create table if not exists organisateur(
    id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
    user_id UUID references "user"(id),
    role_id UUID references role(id)
);