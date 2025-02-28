import Reservation from './entity/Reservation.js';
import { Ticket } from "./entity/Ticket.js";
import User from './entity/User.js';
import Event from './entity/Event.js';
import Organisateur from './entity/Organisateur.js';

const ticket = Ticket.VIP;
const user0 = new User("U001","Freddy","0388050492","freddy@gmail.com","IPA 571 II S")

const reservation = new Reservation("R001",user0, ticket, true);


const organisateur = new Organisateur("U001","Nomena","0388050492","Nomena@gmail.com","IPA 571 II S", "decorateur");

const event0 = new Event("E001", "St Valentin", new Date(), new TimeRanges(), new TimeRanges(), "itaosy", [], [], "balabla", organisateur);

event0.addReservation(reservation);

console.log(event0);

