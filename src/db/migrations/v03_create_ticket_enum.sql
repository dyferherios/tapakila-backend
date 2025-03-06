do
$$
    begin
        if not exists (select from pg_type where typname = 'ticket') then
            create type "ticket" as enum ('VIP', 'STANDARD', 'EARLY BIRD');
        end if;
    end;
$$;
