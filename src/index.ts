import Reservation from './entity/Reservation.js';
import { Ticket } from "./entity/Ticket.js";
import User from './entity/User.js';
import Event from './entity/Event.js';
import Organisateur from './entity/Organisateur.js';
import TicketType from './entity/TicketType.js';
import EventHall from './entity/EventHall.js';

const ticket = Ticket.VIP;
const user0 = new User("U001","Freddy","0388050492","freddy@gmail.com","IPA 571 II S","image")

const reservation = new Reservation("R001",user0, ticket, true, new Date(), new Date(), new Date());

const ticketType0 =  new TicketType("T001", Ticket.VIP, "Ticket for the boss", 100000, 50, new Date(), new Date(), new Date());
const ticketType1 =  new TicketType("T002", Ticket.Early_Bird, "Drinking place", 50000, 50, new Date(), new Date(), new Date());

const organisateur = new Organisateur("U001","Nomena","0388050492","Nomena@gmail.com","IPA 571 II S", "decorateur","image");
const eventhall = new EventHall("L001","BlitSono","insure your event", "itaosy", new Date(), new Date(), new Date());

const event0 = new Event("E001", "St Valentin", new Date(), "14:30:00", "17:30:00",eventhall , [], [], "balabla", [], new Date(), new Date(), new Date());

event0.addReservation(reservation);
event0.addNumberOfTicketsToSellWithType(ticketType0);
event0.addNumberOfTicketsToSellWithType(ticketType1);
event0.addOrganisateur(organisateur);

console.log(event0);

