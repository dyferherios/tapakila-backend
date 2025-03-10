INSERT INTO
    "user" (
        role_id,
        username,
        name,
        email,
        email_verified_at,
        password,
        image_url,
        country_id,
        created_at,
        updated_at
    )
VALUES (
        '51d63e13-1543-473d-87e7-b606603377c3', -- UUID pour le rôle Administrateur
        'admin123',
        'Jean Dupont',
        'jean.dupont@example.com',
        NOW(),
        'password123',
        'https://example.com/image1.jpg',
        'c1a93ad4-28be-4d96-8352-068e057caff9', -- UUID pour France
        NOW(),
        NOW()
    ),
    (
        'cc0dc4e5-fec2-4e1d-b89e-36f296b7c057', -- UUID pour le rôle Modérateur
        'moderator',
        'Pierre Martin',
        'pierre.martin@example.com',
        NOW(),
        'password456',
        'https://example.com/image2.jpg',
        '8d5267af-dae4-41c7-bd85-9602e5987e92', -- UUID pour États-Unis
        NOW(),
        NOW()
    ),
    (
        '4e4613e8-4d45-4892-9fb6-af978b73f6c6', -- UUID pour le rôle Utilisateur
        'user123',
        'Marie Durand',
        'marie.durand@example.com',
        NOW(),
        'password789',
        'https://example.com/image3.jpg',
        '3785e30f-450f-4185-b94d-849b4c9f9a22', -- UUID pour Canada
        NOW(),
        NOW()
    ),
    (
        '51d63e13-1543-473d-87e7-b606603377c3', -- UUID pour le rôle Administrateur
        'user456',
        'Sophie Leroy',
        'sophie.leroy@example.com',
        NOW(),
        'password012',
        'https://example.com/image4.jpg',
        '9de4b867-34ec-4761-bf3d-7aa016656909', -- UUID pour Allemagne
        NOW(),
        NOW()
    ),
    (
        '4e4613e8-4d45-4892-9fb6-af978b73f6c6', -- UUID pour le rôle Utilisateur
        'user789',
        'Lucas Martin',
        'lucas.martin@example.com',
        NOW(),
        'password345',
        'https://example.com/image5.jpg',
        '588d9c17-bcd7-459d-b97b-d670277d9151', -- UUID pour Australie
        NOW(),
        NOW()
    );
    