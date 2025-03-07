DO
$$
BEGIN
    IF EXISTS (
        SELECT 1 FROM pg_roles WHERE rolname = current_setting('myapp.db_user', true)
    ) THEN
        EXECUTE format('GRANT SELECT ON ALL TABLES IN SCHEMA public TO %I', current_setting('myapp.db_user', true));
        EXECUTE format('GRANT INSERT, UPDATE, DELETE ON ALL TABLES IN SCHEMA public TO %I', current_setting('myapp.db_user', true));
    END IF;
END;
$$ LANGUAGE plpgsql;
