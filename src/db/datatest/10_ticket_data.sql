INSERT INTO
    ticket (
        ticket_type_id,
        event_id,
        user_id,
        ticket_number,
        amount_paid,
        currency_id,
        payment_confirmed,
        created_at,
        updated_at,
        deleted_at
    )
VALUES (
        'c0619316-e676-49c7-b33a-2ce41af7eaa6',
        'a5ac01a1-0b36-40c4-8ae2-b19ffe9d01c2',
        '9741f818-4a44-4a89-a6af-8d9b5569999f',
        'TICKET1234',
        299,
        '6e87f5a7-3f0e-412c-bcf0-98ee20a0cf6f',
        TRUE,
        NOW(),
        NOW(),
        NULL
    ),
    (
        '943b77b8-280b-4703-803d-a1058257b1e9',
        '0aefaa1b-ac6f-4e80-9188-9fbfe8216dfb',
        '9741f818-4a44-4a89-a6af-8d9b5569999f',
        'TICKET5678',
        99,
        '6e87f5a7-3f0e-412c-bcf0-98ee20a0cf6f',
        TRUE,
        NOW(),
        NOW(),
        NULL
    );