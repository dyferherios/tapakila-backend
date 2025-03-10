INSERT INTO
    ticket_type (
        event_id,
        title,
        slug,
        description,
        available_ticket,
        price,
        currency_id,
        created_at,
        updated_at,
        deleted_at
    )
VALUES (
        'a5ac01a1-0b36-40c4-8ae2-b19ffe9d01c2',
        'VIP',
        'vip-pass',
        'Access to all areas.',
        50,
        299,
        '6e87f5a7-3f0e-412c-bcf0-98ee20a0cf6f',
        NOW(),
        NOW(),
        NULL
    ),
    (
        '0aefaa1b-ac6f-4e80-9188-9fbfe8216dfb',
        'Early bird',
        'Early bird',
        'Entry to the festival.',
        500,
        99,
        '6e87f5a7-3f0e-412c-bcf0-98ee20a0cf6f',
        NOW(),
        NOW(),
        NULL
    ),
    (
        '361cf346-84c2-4fc9-9256-2b2c9dc4a2e0',
        'Standard',
        'standard',
        'For startup exhibitors.',
        100,
        150,
        '5545c9d0-fbbf-49bf-87bc-1a4173f491df',
        NOW(),
        NOW(),
        NULL
    );