create table if not exists reservation(
    id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
    user_id UUID references "user"(id) on delete cascade,
    ticket_type_id UUID references ticket_type(id) on delete cascade,
    idPayed boolean
);