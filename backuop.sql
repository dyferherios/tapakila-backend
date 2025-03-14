--
-- PostgreSQL database dump
--

-- Dumped from database version 14.17 (Ubuntu 14.17-0ubuntu0.22.04.1)
-- Dumped by pg_dump version 14.17 (Ubuntu 14.17-0ubuntu0.22.04.1)

SET statement_timeout = 0;
SET lock_timeout = 0;
SET idle_in_transaction_session_timeout = 0;
SET client_encoding = 'UTF8';
SET standard_conforming_strings = on;
SELECT pg_catalog.set_config('search_path', '', false);
SET check_function_bodies = false;
SET xmloption = content;
SET client_min_messages = warning;
SET row_security = off;

--
-- Name: uuid-ossp; Type: EXTENSION; Schema: -; Owner: -
--

CREATE EXTENSION IF NOT EXISTS "uuid-ossp" WITH SCHEMA public;


--
-- Name: EXTENSION "uuid-ossp"; Type: COMMENT; Schema: -; Owner: 
--

COMMENT ON EXTENSION "uuid-ossp" IS 'generate universally unique identifiers (UUIDs)';


SET default_tablespace = '';

SET default_table_access_method = heap;

--
-- Name: country; Type: TABLE; Schema: public; Owner: dyferherios
--

CREATE TABLE public.country (
    id uuid DEFAULT public.uuid_generate_v4() NOT NULL,
    name character varying(100),
    created_at timestamp without time zone,
    updated_at timestamp without time zone,
    deleted_at timestamp without time zone
);


ALTER TABLE public.country OWNER TO dyferherios;

--
-- Name: currency; Type: TABLE; Schema: public; Owner: dyferherios
--

CREATE TABLE public.currency (
    id uuid DEFAULT public.uuid_generate_v4() NOT NULL,
    title character varying(100),
    description text,
    created_at timestamp without time zone,
    updated_at timestamp without time zone,
    deleted_at timestamp without time zone
);


ALTER TABLE public.currency OWNER TO dyferherios;

--
-- Name: event; Type: TABLE; Schema: public; Owner: dyferherios
--

CREATE TABLE public.event (
    id uuid DEFAULT public.uuid_generate_v4() NOT NULL,
    event_hall_id uuid,
    host_id uuid,
    user_id uuid,
    title character varying(250),
    slug character varying(250),
    description text,
    start_date date,
    start_time time without time zone,
    end_date date,
    end_time time without time zone,
    age_limit character varying(2),
    created_at timestamp without time zone,
    updated_at timestamp without time zone,
    deleted_at timestamp without time zone
);


ALTER TABLE public.event OWNER TO dyferherios;

--
-- Name: event_hall; Type: TABLE; Schema: public; Owner: dyferherios
--

CREATE TABLE public.event_hall (
    id uuid DEFAULT public.uuid_generate_v4() NOT NULL,
    name character varying(100),
    description text,
    created_at timestamp without time zone,
    updated_at timestamp without time zone,
    deleted_at timestamp without time zone
);


ALTER TABLE public.event_hall OWNER TO dyferherios;

--
-- Name: feedbacks; Type: TABLE; Schema: public; Owner: dyferherios
--

CREATE TABLE public.feedbacks (
    id uuid DEFAULT public.uuid_generate_v4() NOT NULL,
    user_id uuid,
    subject character varying(200),
    message text,
    created_at timestamp without time zone,
    updated_at timestamp without time zone,
    deleted_at timestamp without time zone
);


ALTER TABLE public.feedbacks OWNER TO dyferherios;

--
-- Name: host; Type: TABLE; Schema: public; Owner: dyferherios
--

CREATE TABLE public.host (
    id uuid DEFAULT public.uuid_generate_v4() NOT NULL,
    name character varying(100),
    description text,
    created_at timestamp without time zone,
    updated_at timestamp without time zone,
    deleted_at timestamp without time zone
);


ALTER TABLE public.host OWNER TO dyferherios;

--
-- Name: newsletter; Type: TABLE; Schema: public; Owner: dyferherios
--

CREATE TABLE public.newsletter (
    id uuid DEFAULT public.uuid_generate_v4() NOT NULL,
    name character varying(100),
    email character varying(100),
    created_at timestamp without time zone,
    updated_at timestamp without time zone,
    deleted_at timestamp without time zone
);


ALTER TABLE public.newsletter OWNER TO dyferherios;

--
-- Name: role; Type: TABLE; Schema: public; Owner: dyferherios
--

CREATE TABLE public.role (
    id uuid DEFAULT public.uuid_generate_v4() NOT NULL,
    title character varying(100),
    created_at timestamp without time zone,
    updated_at timestamp without time zone
);


ALTER TABLE public.role OWNER TO dyferherios;

--
-- Name: tag; Type: TABLE; Schema: public; Owner: dyferherios
--

CREATE TABLE public.tag (
    id uuid DEFAULT public.uuid_generate_v4() NOT NULL,
    title character varying(100),
    description text,
    created_at timestamp without time zone,
    updated_at timestamp without time zone,
    deleted_at timestamp without time zone
);


ALTER TABLE public.tag OWNER TO dyferherios;

--
-- Name: ticket; Type: TABLE; Schema: public; Owner: dyferherios
--

CREATE TABLE public.ticket (
    id uuid DEFAULT public.uuid_generate_v4() NOT NULL,
    ticket_type_id uuid,
    user_id uuid,
    ticket_number character varying(200),
    amount_paid bigint,
    currency_id uuid,
    payment_confirmed boolean,
    created_at timestamp without time zone,
    updated_at timestamp without time zone,
    deleted_at timestamp without time zone,
    event_id uuid,
    CONSTRAINT ticket_amount_paid_check CHECK ((amount_paid >= 0))
);


ALTER TABLE public.ticket OWNER TO dyferherios;

--
-- Name: ticket_type; Type: TABLE; Schema: public; Owner: dyferherios
--

CREATE TABLE public.ticket_type (
    id uuid DEFAULT public.uuid_generate_v4() NOT NULL,
    event_id uuid,
    title character varying(100),
    slug character varying(100),
    description text,
    available_ticket bigint,
    price bigint,
    currency_id uuid,
    created_at timestamp without time zone,
    updated_at timestamp without time zone,
    deleted_at timestamp without time zone,
    CONSTRAINT ticket_type_available_ticket_check CHECK ((available_ticket >= 0)),
    CONSTRAINT ticket_type_price_check CHECK ((price >= 0))
);


ALTER TABLE public.ticket_type OWNER TO dyferherios;

--
-- Name: ticket_verification; Type: TABLE; Schema: public; Owner: dyferherios
--

CREATE TABLE public.ticket_verification (
    id uuid DEFAULT public.uuid_generate_v4() NOT NULL,
    ticket_id uuid,
    user_id uuid,
    payment_confirmed boolean,
    created_at timestamp without time zone,
    updated_at timestamp without time zone,
    deleted_at timestamp without time zone
);


ALTER TABLE public.ticket_verification OWNER TO dyferherios;

--
-- Name: user; Type: TABLE; Schema: public; Owner: dyferherios
--

CREATE TABLE public."user" (
    id uuid DEFAULT public.uuid_generate_v4() NOT NULL,
    role_id uuid,
    username character varying(100),
    name character varying(100),
    email character varying(100),
    email_verified_at timestamp without time zone,
    password character varying(100),
    image_url character varying(100),
    country_id uuid,
    created_at timestamp without time zone,
    updated_at timestamp without time zone,
    deleted_at timestamp without time zone
);


ALTER TABLE public."user" OWNER TO dyferherios;

--
-- Data for Name: country; Type: TABLE DATA; Schema: public; Owner: dyferherios
--

COPY public.country (id, name, created_at, updated_at, deleted_at) FROM stdin;
3566aef7-96b4-4d4e-9d05-0ba52796c4b9	France	2025-03-10 21:48:11.064037	2025-03-10 21:48:11.064037	\N
59a79a5f-b743-4ff8-baa7-0e246d7a595f	United States	2025-03-10 21:48:11.064037	2025-03-10 21:48:11.064037	\N
d5ce79a0-dcba-4cab-aac7-bde3fb3d3e97	Germany	2025-03-10 21:48:11.064037	2025-03-10 21:48:11.064037	\N
9af77a06-e7d6-4a34-a45f-8674c0f4995c	United Kingdom	2025-03-10 21:48:11.064037	2025-03-10 21:48:11.064037	\N
36986c6c-a002-4f05-b3c8-d4908612afb5	Canada	2025-03-10 21:48:11.064037	2025-03-10 21:48:11.064037	\N
092b9d8d-d570-4bd1-be73-fcc7a5f3c022	Australia	2025-03-10 21:48:11.064037	2025-03-10 21:48:11.064037	\N
25547620-72f4-4b76-bc2d-5f3dcf30abe8	Spain	2025-03-10 21:48:11.064037	2025-03-10 21:48:11.064037	\N
6cda42b5-dbcd-42b4-98e0-2432e3a05d73	Italy	2025-03-10 21:48:11.064037	2025-03-10 21:48:11.064037	\N
3c3e7a51-39cc-47c0-928c-7a19b91ac519	Netherlands	2025-03-10 21:48:11.064037	2025-03-10 21:48:11.064037	\N
7ea0282d-a195-4200-8256-3127d4667e5c	Japan	2025-03-10 21:48:11.064037	2025-03-10 21:48:11.064037	\N
\.


--
-- Data for Name: currency; Type: TABLE DATA; Schema: public; Owner: dyferherios
--

COPY public.currency (id, title, description, created_at, updated_at, deleted_at) FROM stdin;
6e87f5a7-3f0e-412c-bcf0-98ee20a0cf6f	Dollar US	Monnaie officielle des États-Unis d'Amérique.	2023-01-15 10:30:00	2023-01-20 14:45:00	\N
5545c9d0-fbbf-49bf-87bc-1a4173f491df	Euro	Monnaie commune de la zone euro.	2021-05-02 08:00:00	2021-06-10 09:00:00	\N
bdbff4a0-c06f-4e3a-b9ea-7ef0221e89e4	Yen Japonais	Monnaie officielle du Japon.	2022-02-11 11:00:00	2022-03-15 13:30:00	\N
92e60ef1-ecf0-422d-b0f9-153bbe337725	Livre Sterling	Monnaie du Royaume-Uni et de plusieurs autres territoires.	2020-09-08 07:15:00	2020-09-10 16:45:00	\N
ebd3f181-7e02-4c4b-a0a6-766c94381c15	Franc Suisse	Monnaie officielle de la Suisse.	2019-12-25 19:00:00	2020-01-05 12:00:00	\N
f52ed61d-6067-43c7-9fcb-c33c23e522bc	Rouble Russe	Monnaie officielle de la Russie.	2021-10-04 14:45:00	2021-10-20 18:30:00	\N
18cd3883-2378-4113-9424-3f7fa8a89507	Renminbi (Yuan)	Monnaie officielle de la Chine.	2022-11-15 10:30:00	2022-11-25 15:00:00	\N
4a577bb0-4b77-4ccf-b9d2-650cd825b551	Rupee Indien	Monnaie officielle de l'Inde.	2023-02-20 09:15:00	2023-03-01 16:20:00	\N
265f54c4-5901-4dfa-8ca8-510329ea9db5	Dollar Canadien	Monnaie officielle du Canada.	2021-06-12 13:45:00	2021-06-14 17:00:00	\N
2d3abe20-b3c3-4464-b39f-cb07186129c7	Peso Mexicain	Monnaie officielle du Mexique.	2020-10-05 11:30:00	2020-10-07 14:00:00	\N
7e5c24c1-8e97-400b-bb47-24c821c85d03	USD	US Dollar	2025-03-10 22:09:46.290281	2025-03-10 22:09:46.290281	\N
4e1b3e0b-3b6e-4097-88fc-ae27ae3eef2b	EUR	Euro	2025-03-10 22:09:46.290281	2025-03-10 22:09:46.290281	\N
af4eaab2-f272-46ea-853c-35ec6cb74263	GBP	British Pound	2025-03-10 22:09:46.290281	2025-03-10 22:09:46.290281	\N
d724ecbf-c2ad-48da-9d0c-0ca663a2eafc	JPY	Japanese Yen	2025-03-10 22:09:46.290281	2025-03-10 22:09:46.290281	\N
\.


--
-- Data for Name: event; Type: TABLE DATA; Schema: public; Owner: dyferherios
--

COPY public.event (id, event_hall_id, host_id, user_id, title, slug, description, start_date, start_time, end_date, end_time, age_limit, created_at, updated_at, deleted_at) FROM stdin;
a5ac01a1-0b36-40c4-8ae2-b19ffe9d01c2	f63d84e3-33b7-4274-8244-85e6f9c18060	b21b739f-c51f-40ac-90ce-229b4d084f0f	552648f0-e00d-4724-ac24-9c4d4b0c6d7e	Tech Conference 2025	tech-conf-2025	A global technology conference.	2025-09-01	09:00:00	2025-09-03	18:00:00	18	2025-03-10 22:01:36.163837	2025-03-10 22:01:36.163837	\N
0aefaa1b-ac6f-4e80-9188-9fbfe8216dfb	07a58f7c-14aa-4808-80aa-3bb474ac59b6	3763595f-0946-4844-96dc-2d8ca55bbc49	333022ea-46a4-4b72-bae7-5ab939242d78	Music Fest	music-fest-2025	A grand music festival.	2025-07-20	14:00:00	2025-07-22	23:00:00	16	2025-03-10 22:01:36.163837	2025-03-10 22:01:36.163837	\N
361cf346-84c2-4fc9-9256-2b2c9dc4a2e0	6d74a3c9-9f6f-402a-a48d-01555eef8c79	802cff6e-c841-49cd-973a-01ae0404d973	333022ea-46a4-4b72-bae7-5ab939242d78	Startup Expo	startup-expo-2025	A showcase of startups.	2025-06-15	10:00:00	2025-06-17	17:00:00	18	2025-03-10 22:01:36.163837	2025-03-10 22:01:36.163837	\N
8c00c97d-f69a-437f-b7e3-92164f170db2	de927c0d-0807-44db-9213-f07a3d6da350	15d1407e-c148-4bc6-8f8b-ffe8bae4465c	c2b936f5-2022-4373-8ea0-ab22492af09b	AI Summit	ai-summit-2025	AI and Machine Learning conference.	2025-11-10	08:00:00	2025-11-12	17:00:00	18	2025-03-10 22:01:36.163837	2025-03-10 22:01:36.163837	\N
129ab944-16aa-483d-b784-1282ac4af933	ed4b241c-346c-467a-b080-14c495042d6e	0e824b07-36cd-4ba1-8891-3390d9d99dd8	ed1236cd-01c4-41ae-817e-65143014d0ee	Food Expo	food-expo-2025	A global food exhibition.	2025-05-05	09:00:00	2025-05-07	20:00:00	0	2025-03-10 22:01:36.163837	2025-03-10 22:01:36.163837	\N
\.


--
-- Data for Name: event_hall; Type: TABLE DATA; Schema: public; Owner: dyferherios
--

COPY public.event_hall (id, name, description, created_at, updated_at, deleted_at) FROM stdin;
f63d84e3-33b7-4274-8244-85e6f9c18060	Main Auditorium	Large hall with a 1000-seat capacity.	2025-03-10 21:51:21.758452	2025-03-10 21:51:21.758452	\N
07a58f7c-14aa-4808-80aa-3bb474ac59b6	Outdoor Stage	Open-air stage for concerts.	2025-03-10 21:51:21.758452	2025-03-10 21:51:21.758452	\N
6d74a3c9-9f6f-402a-a48d-01555eef8c79	Startup Pavilion	Dedicated space for startup booths.	2025-03-10 21:51:21.758452	2025-03-10 21:51:21.758452	\N
de927c0d-0807-44db-9213-f07a3d6da350	AI Research Room	Private space for AI discussions.	2025-03-10 21:51:21.758452	2025-03-10 21:51:21.758452	\N
ed4b241c-346c-467a-b080-14c495042d6e	Food Court	Area for food vendors.	2025-03-10 21:51:21.758452	2025-03-10 21:51:21.758452	\N
\.


--
-- Data for Name: feedbacks; Type: TABLE DATA; Schema: public; Owner: dyferherios
--

COPY public.feedbacks (id, user_id, subject, message, created_at, updated_at, deleted_at) FROM stdin;
e435e1b4-305e-476a-8066-e5588344b76d	9741f818-4a44-4a89-a6af-8d9b5569999f	Great Event	Loved the conference!	2025-03-10 22:49:18.523011	2025-03-10 22:49:18.523011	\N
11bd7c58-1121-4842-a310-a0e59ca31da9	ed1236cd-01c4-41ae-817e-65143014d0ee	Food Stalls	Need more vegetarian options.	2025-03-10 22:49:18.523011	2025-03-10 22:49:18.523011	\N
\.


--
-- Data for Name: host; Type: TABLE DATA; Schema: public; Owner: dyferherios
--

COPY public.host (id, name, description, created_at, updated_at, deleted_at) FROM stdin;
b21b739f-c51f-40ac-90ce-229b4d084f0f	TechCorp	Leading technology company hosting the Tech Conference.	2025-03-10 21:55:48.385245	2025-03-10 21:55:48.385245	\N
3763595f-0946-4844-96dc-2d8ca55bbc49	MusicLive	Organizers of international music festivals.	2025-03-10 21:55:48.385245	2025-03-10 21:55:48.385245	\N
802cff6e-c841-49cd-973a-01ae0404d973	StartupWorld	Platform for startups and investors.	2025-03-10 21:55:48.385245	2025-03-10 21:55:48.385245	\N
15d1407e-c148-4bc6-8f8b-ffe8bae4465c	AI Global	Leading AI research and development group.	2025-03-10 21:55:48.385245	2025-03-10 21:55:48.385245	\N
0e824b07-36cd-4ba1-8891-3390d9d99dd8	GourmetExpo	Organization behind the world food exhibition.	2025-03-10 21:55:48.385245	2025-03-10 21:55:48.385245	\N
b6706e97-8411-4291-bd57-c33472d3902f	SportsMania	Hosts global sports events.	2025-03-10 21:55:48.385245	2025-03-10 21:55:48.385245	\N
af2fceec-d144-4d23-907e-cb61894f0fef	EduCon	Educational conferences and summits organizer.	2025-03-10 21:55:48.385245	2025-03-10 21:55:48.385245	\N
caa9289a-8cba-4278-a6ff-cdaf9f015990	FashionWeek	Leading fashion show event organizer.	2025-03-10 21:55:48.385245	2025-03-10 21:55:48.385245	\N
50992d6d-85e0-4687-9a1e-9c96d04bb7ad	AutoFest	Organizes automobile exhibitions.	2025-03-10 21:55:48.385245	2025-03-10 21:55:48.385245	\N
5a309790-bcd7-4a0c-aedb-b3e049f4efa6	GamingLeague	Hosts global gaming tournaments.	2025-03-10 21:55:48.385245	2025-03-10 21:55:48.385245	\N
\.


--
-- Data for Name: newsletter; Type: TABLE DATA; Schema: public; Owner: dyferherios
--

COPY public.newsletter (id, name, email, created_at, updated_at, deleted_at) FROM stdin;
227de503-5ae5-4491-b332-4b88b9fe95f3	Alice	alice@example.com	2025-03-10 22:50:06.210394	2025-03-10 22:50:06.210394	\N
167a366c-8030-47cd-9000-42b4b8c3dbeb	Bob	bob@example.com	2025-03-10 22:50:06.210394	2025-03-10 22:50:06.210394	\N
\.


--
-- Data for Name: role; Type: TABLE DATA; Schema: public; Owner: dyferherios
--

COPY public.role (id, title, created_at, updated_at) FROM stdin;
28505d26-1396-4c00-b659-991ca0a88512	Admin	2025-03-10 21:44:15.963924	2025-03-10 21:44:15.963924
078ae949-23ac-4942-ba66-0520f68f32ac	Organizer	2025-03-10 21:44:15.963924	2025-03-10 21:44:15.963924
ac7c9720-79fc-45b1-bc01-b2c54315d9a5	Attendee	2025-03-10 21:44:15.963924	2025-03-10 21:44:15.963924
4503d769-4ba3-4612-acda-4d5f921c4437	Vendor	2025-03-10 21:44:15.963924	2025-03-10 21:44:15.963924
d84a52c1-71db-4d36-854c-9772b71e8671	Speaker	2025-03-10 21:44:15.963924	2025-03-10 21:44:15.963924
6fa86d9c-1222-4534-bb7f-bd7dd45df23f	Volunteer	2025-03-10 21:44:15.963924	2025-03-10 21:44:15.963924
fa9163bb-7550-4250-b8d1-d077f98538dc	Moderator	2025-03-10 21:44:15.963924	2025-03-10 21:44:15.963924
77d6d000-ebf4-4dca-81c3-bf521ce9f95b	Sponsor	2025-03-10 21:44:15.963924	2025-03-10 21:44:15.963924
a7b68c4e-c7be-4411-a329-37d5c3f85714	Guest	2025-03-10 21:44:15.963924	2025-03-10 21:44:15.963924
01b869e4-123e-45c6-9be5-9f6dddca679a	Press	2025-03-10 21:44:15.963924	2025-03-10 21:44:15.963924
\.


--
-- Data for Name: tag; Type: TABLE DATA; Schema: public; Owner: dyferherios
--

COPY public.tag (id, title, description, created_at, updated_at, deleted_at) FROM stdin;
fb80acc0-463d-40d6-87e0-9c47954bba5c	Technology	Events related to tech.	2025-03-10 22:53:19.991817	2025-03-10 22:53:19.991817	\N
110562cc-f993-4df3-889a-8b822c9245fb	Music	Concerts and music fests.	2025-03-10 22:53:19.991817	2025-03-10 22:53:19.991817	\N
7019c649-34f9-4179-8b5d-7790ff98c1f7	Business	Startup and business events.	2025-03-10 22:53:19.991817	2025-03-10 22:53:19.991817	\N
\.


--
-- Data for Name: ticket; Type: TABLE DATA; Schema: public; Owner: dyferherios
--

COPY public.ticket (id, ticket_type_id, user_id, ticket_number, amount_paid, currency_id, payment_confirmed, created_at, updated_at, deleted_at, event_id) FROM stdin;
1f9b4595-7961-4914-b477-4d84b4a63456	c0619316-e676-49c7-b33a-2ce41af7eaa6	9741f818-4a44-4a89-a6af-8d9b5569999f	TICKET1234	299	6e87f5a7-3f0e-412c-bcf0-98ee20a0cf6f	t	2025-03-13 21:34:00.862965	2025-03-13 21:34:00.862965	\N	a5ac01a1-0b36-40c4-8ae2-b19ffe9d01c2
df7ac54a-988a-4a74-96d9-a8cf2af0642c	943b77b8-280b-4703-803d-a1058257b1e9	9741f818-4a44-4a89-a6af-8d9b5569999f	TICKET5678	99	6e87f5a7-3f0e-412c-bcf0-98ee20a0cf6f	t	2025-03-13 21:34:00.862965	2025-03-13 21:34:00.862965	\N	0aefaa1b-ac6f-4e80-9188-9fbfe8216dfb
\.


--
-- Data for Name: ticket_type; Type: TABLE DATA; Schema: public; Owner: dyferherios
--

COPY public.ticket_type (id, event_id, title, slug, description, available_ticket, price, currency_id, created_at, updated_at, deleted_at) FROM stdin;
c0619316-e676-49c7-b33a-2ce41af7eaa6	a5ac01a1-0b36-40c4-8ae2-b19ffe9d01c2	VIP	vip-pass	Access to all areas.	50	299	6e87f5a7-3f0e-412c-bcf0-98ee20a0cf6f	2025-03-10 22:16:51.732167	2025-03-10 22:16:51.732167	\N
ed58e127-3a23-4f83-8253-0d1456477aa9	0aefaa1b-ac6f-4e80-9188-9fbfe8216dfb	Early bird	Early bird	Entry to the festival.	500	99	6e87f5a7-3f0e-412c-bcf0-98ee20a0cf6f	2025-03-10 22:16:51.732167	2025-03-10 22:16:51.732167	\N
943b77b8-280b-4703-803d-a1058257b1e9	361cf346-84c2-4fc9-9256-2b2c9dc4a2e0	Standard	standard	For startup exhibitors.	100	150	5545c9d0-fbbf-49bf-87bc-1a4173f491df	2025-03-10 22:16:51.732167	2025-03-10 22:16:51.732167	\N
\.


--
-- Data for Name: ticket_verification; Type: TABLE DATA; Schema: public; Owner: dyferherios
--

COPY public.ticket_verification (id, ticket_id, user_id, payment_confirmed, created_at, updated_at, deleted_at) FROM stdin;
\.


--
-- Data for Name: user; Type: TABLE DATA; Schema: public; Owner: dyferherios
--

COPY public."user" (id, role_id, username, name, email, email_verified_at, password, image_url, country_id, created_at, updated_at, deleted_at) FROM stdin;
552648f0-e00d-4724-ac24-9c4d4b0c6d7e	28505d26-1396-4c00-b659-991ca0a88512	admin01	Alice Admin	alice@example.com	2025-03-10 21:50:38.142145	hashed_pw1	img1.jpg	3566aef7-96b4-4d4e-9d05-0ba52796c4b9	2025-03-10 21:50:38.142145	2025-03-10 21:50:38.142145	\N
333022ea-46a4-4b72-bae7-5ab939242d78	078ae949-23ac-4942-ba66-0520f68f32ac	organizer01	Bob Organizer	bob@example.com	2025-03-10 21:50:38.142145	hashed_pw2	img2.jpg	59a79a5f-b743-4ff8-baa7-0e246d7a595f	2025-03-10 21:50:38.142145	2025-03-10 21:50:38.142145	\N
9741f818-4a44-4a89-a6af-8d9b5569999f	ac7c9720-79fc-45b1-bc01-b2c54315d9a5	attendee01	Charlie Attendee	charlie@example.com	2025-03-10 21:50:38.142145	hashed_pw3	img3.jpg	d5ce79a0-dcba-4cab-aac7-bde3fb3d3e97	2025-03-10 21:50:38.142145	2025-03-10 21:50:38.142145	\N
ed1236cd-01c4-41ae-817e-65143014d0ee	4503d769-4ba3-4612-acda-4d5f921c4437	vendor01	Dave Vendor	dave@example.com	2025-03-10 21:50:38.142145	hashed_pw4	img4.jpg	9af77a06-e7d6-4a34-a45f-8674c0f4995c	2025-03-10 21:50:38.142145	2025-03-10 21:50:38.142145	\N
c2b936f5-2022-4373-8ea0-ab22492af09b	d84a52c1-71db-4d36-854c-9772b71e8671	speaker01	Eve Speaker	eve@example.com	2025-03-10 21:50:38.142145	hashed_pw5	img5.jpg	36986c6c-a002-4f05-b3c8-d4908612afb5	2025-03-10 21:50:38.142145	2025-03-10 21:50:38.142145	\N
0342de16-18c0-4bdc-9255-9d8ae221b058	6fa86d9c-1222-4534-bb7f-bd7dd45df23f	volunteer01	Frank Volunteer	frank@example.com	2025-03-10 21:50:38.142145	hashed_pw6	img6.jpg	092b9d8d-d570-4bd1-be73-fcc7a5f3c022	2025-03-10 21:50:38.142145	2025-03-10 21:50:38.142145	\N
5c3697eb-5bd3-499b-9112-c843607714b5	fa9163bb-7550-4250-b8d1-d077f98538dc	moderator01	Grace Moderator	grace@example.com	2025-03-10 21:50:38.142145	hashed_pw7	img7.jpg	25547620-72f4-4b76-bc2d-5f3dcf30abe8	2025-03-10 21:50:38.142145	2025-03-10 21:50:38.142145	\N
d4c45670-5cd5-4f8d-9900-942d411a148c	77d6d000-ebf4-4dca-81c3-bf521ce9f95b	sponsor01	Hank Sponsor	hank@example.com	2025-03-10 21:50:38.142145	hashed_pw8	img8.jpg	6cda42b5-dbcd-42b4-98e0-2432e3a05d73	2025-03-10 21:50:38.142145	2025-03-10 21:50:38.142145	\N
c051df23-ca8c-4fc7-a83f-519b40b0c9fd	a7b68c4e-c7be-4411-a329-37d5c3f85714	guest01	Ivy Guest	ivy@example.com	2025-03-10 21:50:38.142145	hashed_pw9	img9.jpg	3c3e7a51-39cc-47c0-928c-7a19b91ac519	2025-03-10 21:50:38.142145	2025-03-10 21:50:38.142145	\N
f38a48a4-41f1-47b5-be34-287c91b01020	01b869e4-123e-45c6-9be5-9f6dddca679a	press01	Jack Press	jack@example.com	2025-03-10 21:50:38.142145	hashed_pw10	img10.jpg	7ea0282d-a195-4200-8256-3127d4667e5c	2025-03-10 21:50:38.142145	2025-03-10 21:50:38.142145	\N
\.


--
-- Name: country country_pkey; Type: CONSTRAINT; Schema: public; Owner: dyferherios
--

ALTER TABLE ONLY public.country
    ADD CONSTRAINT country_pkey PRIMARY KEY (id);


--
-- Name: currency currency_pkey; Type: CONSTRAINT; Schema: public; Owner: dyferherios
--

ALTER TABLE ONLY public.currency
    ADD CONSTRAINT currency_pkey PRIMARY KEY (id);


--
-- Name: event_hall event_hall_pkey; Type: CONSTRAINT; Schema: public; Owner: dyferherios
--

ALTER TABLE ONLY public.event_hall
    ADD CONSTRAINT event_hall_pkey PRIMARY KEY (id);


--
-- Name: event event_pkey; Type: CONSTRAINT; Schema: public; Owner: dyferherios
--

ALTER TABLE ONLY public.event
    ADD CONSTRAINT event_pkey PRIMARY KEY (id);


--
-- Name: feedbacks feedbacks_pkey; Type: CONSTRAINT; Schema: public; Owner: dyferherios
--

ALTER TABLE ONLY public.feedbacks
    ADD CONSTRAINT feedbacks_pkey PRIMARY KEY (id);


--
-- Name: host host_pkey; Type: CONSTRAINT; Schema: public; Owner: dyferherios
--

ALTER TABLE ONLY public.host
    ADD CONSTRAINT host_pkey PRIMARY KEY (id);


--
-- Name: newsletter newsletter_pkey; Type: CONSTRAINT; Schema: public; Owner: dyferherios
--

ALTER TABLE ONLY public.newsletter
    ADD CONSTRAINT newsletter_pkey PRIMARY KEY (id);


--
-- Name: role role_pkey; Type: CONSTRAINT; Schema: public; Owner: dyferherios
--

ALTER TABLE ONLY public.role
    ADD CONSTRAINT role_pkey PRIMARY KEY (id);


--
-- Name: tag tag_pkey; Type: CONSTRAINT; Schema: public; Owner: dyferherios
--

ALTER TABLE ONLY public.tag
    ADD CONSTRAINT tag_pkey PRIMARY KEY (id);


--
-- Name: ticket ticket_pkey; Type: CONSTRAINT; Schema: public; Owner: dyferherios
--

ALTER TABLE ONLY public.ticket
    ADD CONSTRAINT ticket_pkey PRIMARY KEY (id);


--
-- Name: ticket_type ticket_type_pkey; Type: CONSTRAINT; Schema: public; Owner: dyferherios
--

ALTER TABLE ONLY public.ticket_type
    ADD CONSTRAINT ticket_type_pkey PRIMARY KEY (id);


--
-- Name: ticket_verification ticket_verification_pkey; Type: CONSTRAINT; Schema: public; Owner: dyferherios
--

ALTER TABLE ONLY public.ticket_verification
    ADD CONSTRAINT ticket_verification_pkey PRIMARY KEY (id);


--
-- Name: user user_pkey; Type: CONSTRAINT; Schema: public; Owner: dyferherios
--

ALTER TABLE ONLY public."user"
    ADD CONSTRAINT user_pkey PRIMARY KEY (id);


--
-- Name: event event_event_hall_id_fkey; Type: FK CONSTRAINT; Schema: public; Owner: dyferherios
--

ALTER TABLE ONLY public.event
    ADD CONSTRAINT event_event_hall_id_fkey FOREIGN KEY (event_hall_id) REFERENCES public.event_hall(id) ON DELETE CASCADE;


--
-- Name: event event_host_id_fkey; Type: FK CONSTRAINT; Schema: public; Owner: dyferherios
--

ALTER TABLE ONLY public.event
    ADD CONSTRAINT event_host_id_fkey FOREIGN KEY (host_id) REFERENCES public.host(id) ON DELETE CASCADE;


--
-- Name: event event_user_id_fkey; Type: FK CONSTRAINT; Schema: public; Owner: dyferherios
--

ALTER TABLE ONLY public.event
    ADD CONSTRAINT event_user_id_fkey FOREIGN KEY (user_id) REFERENCES public."user"(id) ON DELETE CASCADE;


--
-- Name: feedbacks feedbacks_user_id_fkey; Type: FK CONSTRAINT; Schema: public; Owner: dyferherios
--

ALTER TABLE ONLY public.feedbacks
    ADD CONSTRAINT feedbacks_user_id_fkey FOREIGN KEY (user_id) REFERENCES public."user"(id) ON DELETE CASCADE;


--
-- Name: ticket ticket_currency_id_fkey; Type: FK CONSTRAINT; Schema: public; Owner: dyferherios
--

ALTER TABLE ONLY public.ticket
    ADD CONSTRAINT ticket_currency_id_fkey FOREIGN KEY (currency_id) REFERENCES public.currency(id) ON DELETE CASCADE;


--
-- Name: ticket ticket_event_id_fkey; Type: FK CONSTRAINT; Schema: public; Owner: dyferherios
--

ALTER TABLE ONLY public.ticket
    ADD CONSTRAINT ticket_event_id_fkey FOREIGN KEY (event_id) REFERENCES public.event(id) ON DELETE CASCADE;


--
-- Name: ticket ticket_ticket_type_id_fkey; Type: FK CONSTRAINT; Schema: public; Owner: dyferherios
--

ALTER TABLE ONLY public.ticket
    ADD CONSTRAINT ticket_ticket_type_id_fkey FOREIGN KEY (ticket_type_id) REFERENCES public.ticket_type(id) ON DELETE CASCADE;


--
-- Name: ticket_type ticket_type_currency_id_fkey; Type: FK CONSTRAINT; Schema: public; Owner: dyferherios
--

ALTER TABLE ONLY public.ticket_type
    ADD CONSTRAINT ticket_type_currency_id_fkey FOREIGN KEY (currency_id) REFERENCES public.currency(id) ON DELETE CASCADE;


--
-- Name: ticket_type ticket_type_event_id_fkey; Type: FK CONSTRAINT; Schema: public; Owner: dyferherios
--

ALTER TABLE ONLY public.ticket_type
    ADD CONSTRAINT ticket_type_event_id_fkey FOREIGN KEY (event_id) REFERENCES public.event(id) ON DELETE CASCADE;


--
-- Name: ticket ticket_user_id_fkey; Type: FK CONSTRAINT; Schema: public; Owner: dyferherios
--

ALTER TABLE ONLY public.ticket
    ADD CONSTRAINT ticket_user_id_fkey FOREIGN KEY (user_id) REFERENCES public."user"(id) ON DELETE CASCADE;


--
-- Name: ticket_verification ticket_verification_ticket_id_fkey; Type: FK CONSTRAINT; Schema: public; Owner: dyferherios
--

ALTER TABLE ONLY public.ticket_verification
    ADD CONSTRAINT ticket_verification_ticket_id_fkey FOREIGN KEY (ticket_id) REFERENCES public.ticket(id) ON DELETE CASCADE;


--
-- Name: ticket_verification ticket_verification_user_id_fkey; Type: FK CONSTRAINT; Schema: public; Owner: dyferherios
--

ALTER TABLE ONLY public.ticket_verification
    ADD CONSTRAINT ticket_verification_user_id_fkey FOREIGN KEY (user_id) REFERENCES public."user"(id) ON DELETE CASCADE;


--
-- Name: user user_country_id_fkey; Type: FK CONSTRAINT; Schema: public; Owner: dyferherios
--

ALTER TABLE ONLY public."user"
    ADD CONSTRAINT user_country_id_fkey FOREIGN KEY (country_id) REFERENCES public.country(id) ON DELETE CASCADE;


--
-- Name: user user_role_id_fkey; Type: FK CONSTRAINT; Schema: public; Owner: dyferherios
--

ALTER TABLE ONLY public."user"
    ADD CONSTRAINT user_role_id_fkey FOREIGN KEY (role_id) REFERENCES public.role(id) ON DELETE CASCADE;


--
-- PostgreSQL database dump complete
--

