DO
$$
BEGIN
    IF NOT EXISTS (
        SELECT 1 FROM pg_roles WHERE rolname = current_setting('myapp.db_user', true)
    ) THEN
        EXECUTE format('CREATE USER %I WITH ENCRYPTED PASSWORD %L', 
                       current_setting('myapp.db_user', true), 
                       current_setting('myapp.db_password', true));
    END IF;
END;
$$ LANGUAGE plpgsql;

