import db from '../config/database.js';
import Station from '../models/stationmodel.js';
import Train from '../models/trainmodel.js';
import Route from '../models/routesmodel.js';
import RouteStation from '../models/route_stationmodel.js';
import Schedule from '../models/schedulemodel.js';
import ScheduleStop from '../models/schedulestopmodel.js';

async function seed() {
  try {
    await db.authenticate();
    await db.sync({ force: true });

    // Stations
    await Station.create({"id": "ST01", "name": "Stasiun Yogyakarta Tugu", "address": "Sosromenduran, Gedong Tengen, Kota Yogyakarta, Daerah Istimewa Yogyakarta", "latitude": -7.788995769694533, "longitude": 110.36315892038724});
    await Station.create({"id": "ST02", "name": "Stasiun Lempuyangan", "address": "Bausasran, Kota Yogyakarta, Daerah Istimewa Yogyakarta", "latitude": -7.790503966221994, "longitude": 110.37560160747464});
    await Station.create({"id": "ST03", "name": "Stasiun Maguwo", "address": "Maguwoharjo, 55282 Sleman, Indonesia, Special Region of Yogyakarta", "latitude": -7.783380237014419, "longitude": 110.4363044969266});
    await Station.create({"id": "ST04", "name": "Stasiun Brambanan", "address": "No, Jl. Raya Solo - Yogyakarta No.25, Kec. Prambanan, Jawa Tengah 57454", "latitude": -7.756505934323557, "longitude": 110.50042132537406});
    await Station.create({"id": "ST05", "name": "Stasiun Srowot", "address": "Ngaseman, Gondangan, Kec. Jogonalan, Kabupaten Klaten, Jawa Tengah 57452", "latitude": -7.741370270966465, "longitude": 110.5491057490854});
    await Station.create({"id": "ST06", "name": "Stasiun Klaten", "address": "Jalan H Samanhudi, Klaten, Klaten Tengah, Kabupaten Klaten, Jawa Tengah", "latitude": -7.712347306652731, "longitude": 110.60295126553422});
    await Station.create({"id": "ST07", "name": "Stasiun Ceper", "address": "Jl. Ceper, Pengung, Jambu Kulon, Kec. Ceper, Kabupaten Klaten, Jawa Tengah 57465", "latitude": -7.6688785776351, "longitude": 110.67478844931118});
    await Station.create({"id": "ST08", "name": "Stasiun Delanggu", "address": "Ds. Gatak, Kec. Delanggu, Kabupaten Klaten, Jawa Tengah", "latitude": -7.622164443093242, "longitude": 110.70661765775858});
    await Station.create({"id": "ST09", "name": "Stasiun Gawok", "address": "Jl. Pajang Gawok, Dusun II, Luwang, Kec. Gatak, Kabupaten Sukoharjo, Jawa Tengah 57557", "latitude": -7.589265991429102, "longitude": 110.74448966859704});
    await Station.create({"id": "ST10", "name": "Stasiun Purwosari", "address": "Jalan Slamet Riyadi, Purwosari, Kecamatan Laweyan, Kota Surakarta, Jawa, Tengah 57142, Indonesia, JL. Brigadir Jenderal Slamet Riyadi, Manahan, 57139 Surakarta, Indonesia,, Indonesia, JL Brigjen Slamet Riyadi, No. 54, Solo, Indonesia, Jawa Tengah", "latitude": -7.56168286133358, "longitude": 110.79651227578744});
    await Station.create({"id": "ST11", "name": "Stasiun Solo Balapan", "address": "Jalan Wolter Monginsidi No.112, Kestalan, Kec. Banjarsari, Kota Surakarta, Jawa Tengah 57133", "latitude": -7.557051613037265, "longitude": 110.82137817652224});
    await Station.create({"id": "ST12", "name": "Stasiun Solo Jebres", "address": "Jl. Jend. Urip Sumoharjo, Purwodiningratan, Kec. Jebres, Kota Surakarta, Jawa Tengah 57128", "latitude": -7.562215511073554, "longitude": 110.83948561414908});
    await Station.create({"id": "ST13", "name": "Stasiun Palur", "address": "Dagen, Jaten, Kec. Karanganyar, Jawa Tengah", "latitude": -7.568074461910269, "longitude": 110.8755656653329});
    await Station.create({"id": "ST14", "name": "Stasiun Wates", "address": "Driyan, Wates, Kec. Wates, Kabupaten Kulon Progo, Daerah Istimewa Yogyakarta 55651", "latitude": -7.859488255857769, "longitude": 110.15794840444742});
    await Station.create({"id": "ST15", "name": "Stasiun YIA", "address": "Kepek, Glagah, Kec. Temon, Kabupaten Kulon Progo, Daerah Istimewa Yogyakarta", "latitude": -7.895132238373584, "longitude": 110.06194152746676});
    await Station.create({"id": "ST16", "name": "Stasiun Wojo", "address": "Dusun I, Dadirejo, Kec. Bagelen, Kabupaten Purworejo, Jawa Tengah 54174", "latitude": -7.861926684038908, "longitude": 110.04055694662516});
    await Station.create({"id": "ST17", "name": "Stasiun Jenar", "address": "ngandul, Kec. Purwodadi, Kabupaten Purworejo, Jawa Tengah 54173", "latitude": -7.802102487515182, "longitude": 110.00065125522696});
    await Station.create({"id": "ST18", "name": "Stasiun Kutoarjo", "address": "Jl. Merpati, Selayan, Semawung Daleman, Kec. Kutoarjo, Kabupaten Purworejo, Jawa Tengah 54212", "latitude": -7.725948515201639, "longitude": 109.90726859958475});

    // Trains
    await Train.create({"name": "Commuter Line Yogyakarta", "type": "KRL"});
    await Train.create({"name": "Prambanan Ekspress", "type": "Prameks"});
    await Train.create({"name": "Kereta Api Bandara YIA", "type": "KA Bandara"});
    await Train.create({"name": "Kereta Api Bandara YIA Xpress", "type": "KA Bandara"});


    // Routes
    await Route.create({"train_id": 1, "train_type": "KRL", "origin_station_id": "ST01", "destination_station_id": "ST13", "route_name": "Yogyakarta Palur"});
    await Route.create({"train_id": 1, "train_type": "KRL", "origin_station_id": "ST13", "destination_station_id": "ST01", "route_name": "Palur Yogyakarta"});
    await Route.create({"train_id": 2, "train_type": "Prameks", "origin_station_id": "ST01", "destination_station_id": "ST18", "route_name": "Yogyakarta Kutoarjo"});
    await Route.create({"train_id": 2, "train_type": "Prameks", "origin_station_id": "ST18", "destination_station_id": "ST01", "route_name": "Kutoarjo Yogyakarta"});
    await Route.create({"train_id": 3, "train_type": "KA Bandara", "origin_station_id": "ST01", "destination_station_id": "ST15", "route_name": "Yogyakarta Bandara YIA"});
    await Route.create({"train_id": 3, "train_type": "KA Bandara", "origin_station_id": "ST15", "destination_station_id": "ST01", "route_name": "Bandara YIA Yogyakarta"});
    await Route.create({"train_id": 4, "train_type": "KA Bandara", "origin_station_id": "ST01", "destination_station_id": "ST15", "route_name": "Yogyakarta Bandara YIA"});
    await Route.create({"train_id": 4, "train_type": "KA Bandara", "origin_station_id": "ST15", "destination_station_id": "ST01", "route_name": "Bandara YIA Yogyakarta"});

    // Route Stations
    await RouteStation.create({"route_id": 1, "station_id": "ST01", "stop_order": 1});
    await RouteStation.create({"route_id": 1, "station_id": "ST02", "stop_order": 2});
    await RouteStation.create({"route_id": 1, "station_id": "ST03", "stop_order": 3});
    await RouteStation.create({"route_id": 1, "station_id": "ST04", "stop_order": 4});
    await RouteStation.create({"route_id": 1, "station_id": "ST05", "stop_order": 5});
    await RouteStation.create({"route_id": 1, "station_id": "ST06", "stop_order": 6});
    await RouteStation.create({"route_id": 1, "station_id": "ST07", "stop_order": 7});
    await RouteStation.create({"route_id": 1, "station_id": "ST08", "stop_order": 8});
    await RouteStation.create({"route_id": 1, "station_id": "ST09", "stop_order": 9});
    await RouteStation.create({"route_id": 1, "station_id": "ST10", "stop_order": 10});
    await RouteStation.create({"route_id": 1, "station_id": "ST11", "stop_order": 11});
    await RouteStation.create({"route_id": 1, "station_id": "ST12", "stop_order": 12});
    await RouteStation.create({"route_id": 1, "station_id": "ST13", "stop_order": 13});
    await RouteStation.create({"route_id": 2, "station_id": "ST13", "stop_order": 1});
    await RouteStation.create({"route_id": 2, "station_id": "ST12", "stop_order": 2});
    await RouteStation.create({"route_id": 2, "station_id": "ST11", "stop_order": 3});
    await RouteStation.create({"route_id": 2, "station_id": "ST10", "stop_order": 4});
    await RouteStation.create({"route_id": 2, "station_id": "ST09", "stop_order": 5});
    await RouteStation.create({"route_id": 2, "station_id": "ST08", "stop_order": 6});
    await RouteStation.create({"route_id": 2, "station_id": "ST07", "stop_order": 7});
    await RouteStation.create({"route_id": 2, "station_id": "ST06", "stop_order": 8});
    await RouteStation.create({"route_id": 2, "station_id": "ST05", "stop_order": 9});
    await RouteStation.create({"route_id": 2, "station_id": "ST04", "stop_order": 10});
    await RouteStation.create({"route_id": 2, "station_id": "ST03", "stop_order": 11});
    await RouteStation.create({"route_id": 2, "station_id": "ST02", "stop_order": 12});
    await RouteStation.create({"route_id": 2, "station_id": "ST01", "stop_order": 13});
    await RouteStation.create({"route_id": 3, "station_id": "ST01", "stop_order": 1});
    await RouteStation.create({"route_id": 3, "station_id": "ST14", "stop_order": 2});
    await RouteStation.create({"route_id": 3, "station_id": "ST16", "stop_order": 3});
    await RouteStation.create({"route_id": 3, "station_id": "ST17", "stop_order": 4});
    await RouteStation.create({"route_id": 3, "station_id": "ST18", "stop_order": 5});
    await RouteStation.create({"route_id": 4, "station_id": "ST18", "stop_order": 1});
    await RouteStation.create({"route_id": 4, "station_id": "ST17", "stop_order": 2});
    await RouteStation.create({"route_id": 4, "station_id": "ST16", "stop_order": 3});
    await RouteStation.create({"route_id": 4, "station_id": "ST14", "stop_order": 4});
    await RouteStation.create({"route_id": 4, "station_id": "ST01", "stop_order": 5});
    await RouteStation.create({"route_id": 5, "station_id": "ST01", "stop_order": 1});
    await RouteStation.create({"route_id": 5, "station_id": "ST14", "stop_order": 2});
    await RouteStation.create({"route_id": 5, "station_id": "ST15", "stop_order": 3});
    await RouteStation.create({"route_id": 6, "station_id": "ST15", "stop_order": 1});
    await RouteStation.create({"route_id": 6, "station_id": "ST14", "stop_order": 2});
    await RouteStation.create({"route_id": 6, "station_id": "ST01", "stop_order": 3});
    await RouteStation.create({"route_id": 7, "station_id": "ST01", "stop_order": 1});
    await RouteStation.create({"route_id": 7, "station_id": "ST15", "stop_order": 2});
    await RouteStation.create({"route_id": 8, "station_id": "ST15", "stop_order": 1});
    await RouteStation.create({"route_id": 8, "station_id": "ST01", "stop_order": 2});


    // Schedules
    await Schedule.create({ id: 1, route_id: 1, departure_time: "05:05:00" });
    await Schedule.create({ id: 2, route_id: 1, departure_time: "06:00:00" });
    await Schedule.create({ id: 3, route_id: 1, departure_time: "07:05:00" });
    await Schedule.create({ id: 4, route_id: 1, departure_time: "07:54:00" });
    await Schedule.create({ id: 5, route_id: 1, departure_time: "08:49:00" });
    await Schedule.create({ id: 6, route_id: 1, departure_time: "10:56:00" });
    await Schedule.create({ id: 7, route_id: 1, departure_time: "12:07:00" });
    await Schedule.create({ id: 8, route_id: 1, departure_time: "13:57:00" });
    await Schedule.create({ id: 9, route_id: 1, departure_time: "15:01:00" });
    await Schedule.create({ id: 10, route_id: 1, departure_time: "16:10:00" });
    await Schedule.create({ id: 11, route_id: 1, departure_time: "18:08:00" });
    await Schedule.create({ id: 12, route_id: 1, departure_time: "17:35:00" });
    await Schedule.create({ id: 13, route_id: 1, departure_time: "20:15:00" });
    await Schedule.create({ id: 14, route_id: 1, departure_time: "21:20:00" });
    await Schedule.create({ id: 15, route_id: 1, departure_time: "22:35:00" });


    await Schedule.create({ id: 16, route_id: 2, departure_time: "05:00:00" });
    await Schedule.create({ id: 17, route_id: 2, departure_time: "06:05:00" });
    await Schedule.create({ id: 18, route_id: 2, departure_time: "07:15:00" });
    await Schedule.create({ id: 19, route_id: 2, departure_time: "08:56:00" });
    await Schedule.create({ id: 20, route_id: 2, departure_time: "10:40:00" });
    await Schedule.create({ id: 21, route_id: 2, departure_time: "12:50:00" });
    await Schedule.create({ id: 22, route_id: 2, departure_time: "13:43:00" });
    await Schedule.create({ id: 23, route_id: 2, departure_time: "15:35:00" });
    await Schedule.create({ id: 24, route_id: 2, departure_time: "18:05:00" });
    await Schedule.create({ id: 25, route_id: 2, departure_time: "19:45:00" });
    await Schedule.create({ id: 26, route_id: 2, departure_time: "20:42:00" });


    await Schedule.create({ id: 27, route_id: 3, departure_time: "06:40:00" });
    await Schedule.create({ id: 28, route_id: 3, departure_time: "11:50:00" });
    await Schedule.create({ id: 29, route_id: 3, departure_time: "15:15:00" });
    await Schedule.create({ id: 30, route_id: 3, departure_time: "16:20:00" });
    await Schedule.create({ id: 31, route_id: 3, departure_time: "18:45:00" });
    

    await Schedule.create({ id: 32, route_id: 4, departure_time: "05:10:00" });
    await Schedule.create({ id: 33, route_id: 4, departure_time: "09:05:00" });
    await Schedule.create({ id: 34, route_id: 4, departure_time: "13:19:00" });
    await Schedule.create({ id: 35, route_id: 4, departure_time: "16:50:00" });
    await Schedule.create({ id: 36, route_id: 4, departure_time: "18:45:00" });


    await Schedule.create({ id: 37, route_id: 5, departure_time: "04:20:00" });
    await Schedule.create({ id: 38, route_id: 5, departure_time: "05:10:00" });
    await Schedule.create({ id: 39, route_id: 5, departure_time: "06:30:00" });
    await Schedule.create({ id: 40, route_id: 5, departure_time: "08:33:00" });
    await Schedule.create({ id: 41, route_id: 5, departure_time: "08:55:00" });
    await Schedule.create({ id: 42, route_id: 5, departure_time: "12:00:00" });
    await Schedule.create({ id: 43, route_id: 5, departure_time: "12:35:00" });
    await Schedule.create({ id: 44, route_id: 5, departure_time: "14:13:00" });
    await Schedule.create({ id: 45, route_id: 5, departure_time: "15:49:00" });
    await Schedule.create({ id: 46, route_id: 5, departure_time: "16:07:00" });
    await Schedule.create({ id: 47, route_id: 5, departure_time: "18:25:00" });
    await Schedule.create({ id: 48, route_id: 5, departure_time: "19:16:00" });


    await Schedule.create({ id: 49, route_id: 6, departure_time: "05:16:00" });
    await Schedule.create({ id: 50, route_id: 6, departure_time: "06:20:00" });
    await Schedule.create({ id: 51, route_id: 6, departure_time: "07:46:00" });
    await Schedule.create({ id: 52, route_id: 6, departure_time: "09:53:00" });
    await Schedule.create({ id: 53, route_id: 6, departure_time: "11:35:00" });
    await Schedule.create({ id: 54, route_id: 6, departure_time: "13:25:00" });
    await Schedule.create({ id: 55, route_id: 6, departure_time: "14:56:00" });
    await Schedule.create({ id: 56, route_id: 6, departure_time: "15:20:00" });
    await Schedule.create({ id: 57, route_id: 6, departure_time: "17:00:00" });
    await Schedule.create({ id: 58, route_id: 6, departure_time: "17:34:00" });
    await Schedule.create({ id: 59, route_id: 6, departure_time: "19:46:00" });
    await Schedule.create({ id: 60, route_id: 6, departure_time: "20:55:00" });

    await Schedule.create({ id: 61, route_id: 7, departure_time: "06:00:00" });
    await Schedule.create({ id: 62, route_id: 7, departure_time: "07:40:00" });
    await Schedule.create({ id: 63, route_id: 7, departure_time: "07:57:00" });
    await Schedule.create({ id: 64, route_id: 7, departure_time: "09:28:00" });
    await Schedule.create({ id: 65, route_id: 7, departure_time: "09:51:00" });
    await Schedule.create({ id: 66, route_id: 7, departure_time: "11:03:00" });
    await Schedule.create({ id: 67, route_id: 7, departure_time: "13:28:00" });
    await Schedule.create({ id: 68, route_id: 7, departure_time: "15:02:00" });
    await Schedule.create({ id: 69, route_id: 7, departure_time: "15:30:00" });
    await Schedule.create({ id: 70, route_id: 7, departure_time: "16:48:00" });
    await Schedule.create({ id: 71, route_id: 7, departure_time: "17:15:00" });
    await Schedule.create({ id: 72, route_id: 7, departure_time: "18:50:00" });
    await Schedule.create({ id: 73, route_id: 7, departure_time: "20:12:00" });


    await Schedule.create({ id: 74, route_id: 8, departure_time: "07:00:00" });
    await Schedule.create({ id: 75, route_id: 8, departure_time: "08:40:00" });
    await Schedule.create({ id: 76, route_id: 8, departure_time: "09:05:00" });
    await Schedule.create({ id: 77, route_id: 8, departure_time: "10:20:00" });
    await Schedule.create({ id: 78, route_id: 8, departure_time: "10:54:00" });
    await Schedule.create({ id: 79, route_id: 8, departure_time: "12:24:00" });
    await Schedule.create({ id: 80, route_id: 8, departure_time: "14:45:00" });
    await Schedule.create({ id: 81, route_id: 8, departure_time: "15:45:00" });
    await Schedule.create({ id: 82, route_id: 8, departure_time: "16:17:00" });
    await Schedule.create({ id: 83, route_id: 8, departure_time: "18:00:00" });
    await Schedule.create({ id: 84, route_id: 8, departure_time: "18:54:00" });
    await Schedule.create({ id: 85, route_id: 8, departure_time: "20:15:00" });
    await Schedule.create({ id: 86, route_id: 8, departure_time: "21:30:00" });



    // Schedule Stops
    //KRL JP
    await ScheduleStop.create({"schedule_id": 1, "station_id": "ST01", "stop_order": 1, "arrival_time": "05:05:00"});
    await ScheduleStop.create({"schedule_id": 1, "station_id": "ST02", "stop_order": 2, "arrival_time": "05:10:00"});
    await ScheduleStop.create({"schedule_id": 1, "station_id": "ST03", "stop_order": 3, "arrival_time": "05:17:00"});
    await ScheduleStop.create({"schedule_id": 1, "station_id": "ST04", "stop_order": 4, "arrival_time": "05:26:00"});
    await ScheduleStop.create({"schedule_id": 1, "station_id": "ST05", "stop_order": 5, "arrival_time": "05:33:00"});
    await ScheduleStop.create({"schedule_id": 1, "station_id": "ST06", "stop_order": 6, "arrival_time": "05:40:00"});
    await ScheduleStop.create({"schedule_id": 1, "station_id": "ST07", "stop_order": 7, "arrival_time": "05:49:00"});
    await ScheduleStop.create({"schedule_id": 1, "station_id": "ST08", "stop_order": 8, "arrival_time": "05:56:00"});
    await ScheduleStop.create({"schedule_id": 1, "station_id": "ST09", "stop_order": 9, "arrival_time": "06:03:00"});
    await ScheduleStop.create({"schedule_id": 1, "station_id": "ST10", "stop_order": 10, "arrival_time": "06:11:00"});
    await ScheduleStop.create({"schedule_id": 1, "station_id": "ST11", "stop_order": 11, "arrival_time": "06:16:00"});
    await ScheduleStop.create({"schedule_id": 1, "station_id": "ST12", "stop_order": 12, "arrival_time": "06:21:00"});
    await ScheduleStop.create({"schedule_id": 1, "station_id": "ST13", "stop_order": 13, "arrival_time": "06:26:00"});

    //KRLPJ
    await ScheduleStop.create({"schedule_id": 2, "station_id": "ST01", "stop_order": 1, "arrival_time": "06:00:00"});
    await ScheduleStop.create({"schedule_id": 2, "station_id": "ST02", "stop_order": 2, "arrival_time": "06:06:00"});
    await ScheduleStop.create({"schedule_id": 2, "station_id": "ST03", "stop_order": 3, "arrival_time": "06:13:00"});
    await ScheduleStop.create({"schedule_id": 2, "station_id": "ST04", "stop_order": 4, "arrival_time": "06:21:00"});
    await ScheduleStop.create({"schedule_id": 2, "station_id": "ST05", "stop_order": 5, "arrival_time": "06:28:00"});
    await ScheduleStop.create({"schedule_id": 2, "station_id": "ST06", "stop_order": 6, "arrival_time": "06:35:00"});
    await ScheduleStop.create({"schedule_id": 2, "station_id": "ST07", "stop_order": 7, "arrival_time": "06:44:00"});
    await ScheduleStop.create({"schedule_id": 2, "station_id": "ST08", "stop_order": 8, "arrival_time": "06:51:00"});
    await ScheduleStop.create({"schedule_id": 2, "station_id": "ST09", "stop_order": 9, "arrival_time": "06:57:00"});
    await ScheduleStop.create({"schedule_id": 2, "station_id": "ST10", "stop_order": 10, "arrival_time": "07:04:00"});
    await ScheduleStop.create({"schedule_id": 2, "station_id": "ST11", "stop_order": 11, "arrival_time": "07:10:00"});
    await ScheduleStop.create({"schedule_id": 2, "station_id": "ST12", "stop_order": 12, "arrival_time": "07:15:00"});
    await ScheduleStop.create({"schedule_id": 2, "station_id": "ST13", "stop_order": 13, "arrival_time": "07:20:00"});

    await ScheduleStop.create({"schedule_id": 3, "station_id": "ST01", "stop_order": 1, "arrival_time": "07:05:00"});
    await ScheduleStop.create({"schedule_id": 3, "station_id": "ST02", "stop_order": 2, "arrival_time": "07:10:00"});
    await ScheduleStop.create({"schedule_id": 3, "station_id": "ST03", "stop_order": 3, "arrival_time": "07:17:00"});
    await ScheduleStop.create({"schedule_id": 3, "station_id": "ST04", "stop_order": 4, "arrival_time": "07:25:00"});
    await ScheduleStop.create({"schedule_id": 3, "station_id": "ST05", "stop_order": 5, "arrival_time": "07:32:00"});
    await ScheduleStop.create({"schedule_id": 3, "station_id": "ST06", "stop_order": 6, "arrival_time": "07:39:00"});
    await ScheduleStop.create({"schedule_id": 3, "station_id": "ST07", "stop_order": 7, "arrival_time": "07:48:00"});
    await ScheduleStop.create({"schedule_id": 3, "station_id": "ST08", "stop_order": 8, "arrival_time": "07:55:00"});
    await ScheduleStop.create({"schedule_id": 3, "station_id": "ST09", "stop_order": 9, "arrival_time": "08:01:00"});
    await ScheduleStop.create({"schedule_id": 3, "station_id": "ST10", "stop_order": 10, "arrival_time": "08:09:00"});
    await ScheduleStop.create({"schedule_id": 3, "station_id": "ST11", "stop_order": 11, "arrival_time": "08:16:00"});
    await ScheduleStop.create({"schedule_id": 3, "station_id": "ST12", "stop_order": 12, "arrival_time": "08:23:00"});
    await ScheduleStop.create({"schedule_id": 3, "station_id": "ST13", "stop_order": 13, "arrival_time": "08:28:00"});

    await ScheduleStop.create({"schedule_id": 4, "station_id": "ST01", "stop_order": 1, "arrival_time": "07:54:00"});
    await ScheduleStop.create({"schedule_id": 4, "station_id": "ST02", "stop_order": 2, "arrival_time": "07:59:00"});
    await ScheduleStop.create({"schedule_id": 4, "station_id": "ST03", "stop_order": 3, "arrival_time": "08:06:00"});
    await ScheduleStop.create({"schedule_id": 4, "station_id": "ST04", "stop_order": 4, "arrival_time": "08:14:00"});
    await ScheduleStop.create({"schedule_id": 4, "station_id": "ST05", "stop_order": 5, "arrival_time": "08:21:00"});
    await ScheduleStop.create({"schedule_id": 4, "station_id": "ST06", "stop_order": 6, "arrival_time": "08:28:00"});
    await ScheduleStop.create({"schedule_id": 4, "station_id": "ST07", "stop_order": 7, "arrival_time": "08:37:00"});
    await ScheduleStop.create({"schedule_id": 4, "station_id": "ST08", "stop_order": 8, "arrival_time": "08:44:00"});
    await ScheduleStop.create({"schedule_id": 4, "station_id": "ST09", "stop_order": 9, "arrival_time": "08:51:00"});
    await ScheduleStop.create({"schedule_id": 4, "station_id": "ST10", "stop_order": 10, "arrival_time": "08:59:00"});
    await ScheduleStop.create({"schedule_id": 4, "station_id": "ST11", "stop_order": 11, "arrival_time": "09:06:00"});
    await ScheduleStop.create({"schedule_id": 4, "station_id": "ST12", "stop_order": 12, "arrival_time": "09:12:00"});
    await ScheduleStop.create({"schedule_id": 4, "station_id": "ST13", "stop_order": 13, "arrival_time": "09:17:00"});

    await ScheduleStop.create({"schedule_id": 5, "station_id": "ST01", "stop_order": 1, "arrival_time": "08:49:00"});
    await ScheduleStop.create({"schedule_id": 5, "station_id": "ST02", "stop_order": 2, "arrival_time": "08:54:00"});
    await ScheduleStop.create({"schedule_id": 5, "station_id": "ST03", "stop_order": 3, "arrival_time": "09:01:00"});
    await ScheduleStop.create({"schedule_id": 5, "station_id": "ST04", "stop_order": 4, "arrival_time": "09:09:00"});
    await ScheduleStop.create({"schedule_id": 5, "station_id": "ST05", "stop_order": 5, "arrival_time": "09:16:00"});
    await ScheduleStop.create({"schedule_id": 5, "station_id": "ST06", "stop_order": 6, "arrival_time": "09:23:00"});
    await ScheduleStop.create({"schedule_id": 5, "station_id": "ST07", "stop_order": 7, "arrival_time": "09:32:00"});
    await ScheduleStop.create({"schedule_id": 5, "station_id": "ST08", "stop_order": 8, "arrival_time": "09:39:00"});
    await ScheduleStop.create({"schedule_id": 5, "station_id": "ST09", "stop_order": 9, "arrival_time": "09:45:00"});
    await ScheduleStop.create({"schedule_id": 5, "station_id": "ST10", "stop_order": 10, "arrival_time": "09:52:00"});
    await ScheduleStop.create({"schedule_id": 5, "station_id": "ST11", "stop_order": 11, "arrival_time": "10:00:00"});
    await ScheduleStop.create({"schedule_id": 5, "station_id": "ST12", "stop_order": 12, "arrival_time": "10:06:00"});
    await ScheduleStop.create({"schedule_id": 5, "station_id": "ST13", "stop_order": 13, "arrival_time": "10:11:00"});

    await ScheduleStop.create({"schedule_id": 6, "station_id": "ST01", "stop_order": 1, "arrival_time": "10:56:00"});
    await ScheduleStop.create({"schedule_id": 6, "station_id": "ST02", "stop_order": 2, "arrival_time": "11:01:00"});
    await ScheduleStop.create({"schedule_id": 6, "station_id": "ST03", "stop_order": 3, "arrival_time": "11:08:00"});
    await ScheduleStop.create({"schedule_id": 6, "station_id": "ST04", "stop_order": 4, "arrival_time": "11:16:00"});
    await ScheduleStop.create({"schedule_id": 6, "station_id": "ST05", "stop_order": 5, "arrival_time": "11:23:00"});
    await ScheduleStop.create({"schedule_id": 6, "station_id": "ST06", "stop_order": 6, "arrival_time": "11:30:00"});
    await ScheduleStop.create({"schedule_id": 6, "station_id": "ST07", "stop_order": 7, "arrival_time": "11:39:00"});
    await ScheduleStop.create({"schedule_id": 6, "station_id": "ST08", "stop_order": 8, "arrival_time": "11:46:00"});
    await ScheduleStop.create({"schedule_id": 6, "station_id": "ST09", "stop_order": 9, "arrival_time": "11:52:00"});
    await ScheduleStop.create({"schedule_id": 6, "station_id": "ST10", "stop_order": 10, "arrival_time": "12:00:00"});
    await ScheduleStop.create({"schedule_id": 6, "station_id": "ST11", "stop_order": 11, "arrival_time": "12:06:00"});
    await ScheduleStop.create({"schedule_id": 6, "station_id": "ST12", "stop_order": 12, "arrival_time": "12:12:00"});
    await ScheduleStop.create({"schedule_id": 6, "station_id": "ST13", "stop_order": 13, "arrival_time": "12:17:00"});

    await ScheduleStop.create({"schedule_id": 7, "station_id": "ST01", "stop_order": 1, "arrival_time": "12:07:00"});
    await ScheduleStop.create({"schedule_id": 7, "station_id": "ST02", "stop_order": 2, "arrival_time": "12:12:00"});
    await ScheduleStop.create({"schedule_id": 7, "station_id": "ST03", "stop_order": 3, "arrival_time": "12:19:00"});
    await ScheduleStop.create({"schedule_id": 7, "station_id": "ST04", "stop_order": 4, "arrival_time": "12:27:00"});
    await ScheduleStop.create({"schedule_id": 7, "station_id": "ST05", "stop_order": 5, "arrival_time": "12:34:00"});
    await ScheduleStop.create({"schedule_id": 7, "station_id": "ST06", "stop_order": 6, "arrival_time": "12:41:00"});
    await ScheduleStop.create({"schedule_id": 7, "station_id": "ST07", "stop_order": 7, "arrival_time": "12:50:00"});
    await ScheduleStop.create({"schedule_id": 7, "station_id": "ST08", "stop_order": 8, "arrival_time": "12:57:00"});
    await ScheduleStop.create({"schedule_id": 7, "station_id": "ST09", "stop_order": 9, "arrival_time": "13:03:00"});
    await ScheduleStop.create({"schedule_id": 7, "station_id": "ST10", "stop_order": 10, "arrival_time": "13:10:00"});
    await ScheduleStop.create({"schedule_id": 7, "station_id": "ST11", "stop_order": 11, "arrival_time": "13:17:00"});
    await ScheduleStop.create({"schedule_id": 7, "station_id": "ST12", "stop_order": 12, "arrival_time": "13:24:00"});
    await ScheduleStop.create({"schedule_id": 7, "station_id": "ST13", "stop_order": 13, "arrival_time": "13:29:00"});

    await ScheduleStop.create({"schedule_id": 8, "station_id": "ST01", "stop_order": 1, "arrival_time": "13:57:00"});
    await ScheduleStop.create({"schedule_id": 8, "station_id": "ST02", "stop_order": 2, "arrival_time": "14:02:00"});
    await ScheduleStop.create({"schedule_id": 8, "station_id": "ST03", "stop_order": 3, "arrival_time": "14:10:00"});
    await ScheduleStop.create({"schedule_id": 8, "station_id": "ST04", "stop_order": 4, "arrival_time": "14:19:00"});
    await ScheduleStop.create({"schedule_id": 8, "station_id": "ST05", "stop_order": 5, "arrival_time": "14:26:00"});
    await ScheduleStop.create({"schedule_id": 8, "station_id": "ST06", "stop_order": 6, "arrival_time": "14:33:00"});
    await ScheduleStop.create({"schedule_id": 8, "station_id": "ST07", "stop_order": 7, "arrival_time": "14:42:00"});
    await ScheduleStop.create({"schedule_id": 8, "station_id": "ST08", "stop_order": 8, "arrival_time": "14:49:00"});
    await ScheduleStop.create({"schedule_id": 8, "station_id": "ST09", "stop_order": 9, "arrival_time": "14:56:00"});
    await ScheduleStop.create({"schedule_id": 8, "station_id": "ST10", "stop_order": 10, "arrival_time": "15:03:00"});
    await ScheduleStop.create({"schedule_id": 8, "station_id": "ST11", "stop_order": 11, "arrival_time": "15:09:00"});
    await ScheduleStop.create({"schedule_id": 8, "station_id": "ST12", "stop_order": 12, "arrival_time": "15:15:00"});
    await ScheduleStop.create({"schedule_id": 8, "station_id": "ST13", "stop_order": 13, "arrival_time": "15:20:00"});

    await ScheduleStop.create({"schedule_id": 9, "station_id": "ST01", "stop_order": 1, "arrival_time": "15:01:00"});
    await ScheduleStop.create({"schedule_id": 9, "station_id": "ST02", "stop_order": 2, "arrival_time": "15:06:00"});
    await ScheduleStop.create({"schedule_id": 9, "station_id": "ST03", "stop_order": 3, "arrival_time": "15:13:00"});
    await ScheduleStop.create({"schedule_id": 9, "station_id": "ST04", "stop_order": 4, "arrival_time": "15:22:00"});
    await ScheduleStop.create({"schedule_id": 9, "station_id": "ST05", "stop_order": 5, "arrival_time": "15:29:00"});
    await ScheduleStop.create({"schedule_id": 9, "station_id": "ST06", "stop_order": 6, "arrival_time": "15:36:00"});
    await ScheduleStop.create({"schedule_id": 9, "station_id": "ST07", "stop_order": 7, "arrival_time": "15:45:00"});
    await ScheduleStop.create({"schedule_id": 9, "station_id": "ST08", "stop_order": 8, "arrival_time": "15:52:00"});
    await ScheduleStop.create({"schedule_id": 9, "station_id": "ST09", "stop_order": 9, "arrival_time": "15:58:00"});
    await ScheduleStop.create({"schedule_id": 9, "station_id": "ST10", "stop_order": 10, "arrival_time": "16:06:00"});
    await ScheduleStop.create({"schedule_id": 9, "station_id": "ST11", "stop_order": 11, "arrival_time": "16:13:00"});
    await ScheduleStop.create({"schedule_id": 9, "station_id": "ST12", "stop_order": 12, "arrival_time": "16:19:00"});
    await ScheduleStop.create({"schedule_id": 9, "station_id": "ST13", "stop_order": 13, "arrival_time": "16:24:00"});

    await ScheduleStop.create({"schedule_id": 10, "station_id": "ST01", "stop_order": 1, "arrival_time": "16:10:00"});
    await ScheduleStop.create({"schedule_id": 10, "station_id": "ST02", "stop_order": 2, "arrival_time": "16:15:00"});
    await ScheduleStop.create({"schedule_id": 10, "station_id": "ST03", "stop_order": 3, "arrival_time": "16:22:00"});
    await ScheduleStop.create({"schedule_id": 10, "station_id": "ST04", "stop_order": 4, "arrival_time": "16:30:00"});
    await ScheduleStop.create({"schedule_id": 10, "station_id": "ST05", "stop_order": 5, "arrival_time": "16:37:00"});
    await ScheduleStop.create({"schedule_id": 10, "station_id": "ST06", "stop_order": 6, "arrival_time": "16:44:00"});
    await ScheduleStop.create({"schedule_id": 10, "station_id": "ST07", "stop_order": 7, "arrival_time": "16:53:00"});
    await ScheduleStop.create({"schedule_id": 10, "station_id": "ST08", "stop_order": 8, "arrival_time": "17:12:00"});
    await ScheduleStop.create({"schedule_id": 10, "station_id": "ST09", "stop_order": 9, "arrival_time": "17:18:00"});
    await ScheduleStop.create({"schedule_id": 10, "station_id": "ST10", "stop_order": 10, "arrival_time": "17:26:00"});
    await ScheduleStop.create({"schedule_id": 10, "station_id": "ST11", "stop_order": 11, "arrival_time": "17:35:00"});
    await ScheduleStop.create({"schedule_id": 10, "station_id": "ST12", "stop_order": 12, "arrival_time": "17:40:00"});
    await ScheduleStop.create({"schedule_id": 10, "station_id": "ST13", "stop_order": 13, "arrival_time": "17:45:00"});

    await ScheduleStop.create({"schedule_id": 12, "station_id": "ST01", "stop_order": 1, "arrival_time": "18:08:00"});
    await ScheduleStop.create({"schedule_id": 12, "station_id": "ST02", "stop_order": 2, "arrival_time": "18:13:00"});
    await ScheduleStop.create({"schedule_id": 12, "station_id": "ST03", "stop_order": 3, "arrival_time": "18:20:00"});
    await ScheduleStop.create({"schedule_id": 12, "station_id": "ST04", "stop_order": 4, "arrival_time": "18:28:00"});
    await ScheduleStop.create({"schedule_id": 12, "station_id": "ST05", "stop_order": 5, "arrival_time": "18:35:00"});
    await ScheduleStop.create({"schedule_id": 12, "station_id": "ST06", "stop_order": 6, "arrival_time": "18:42:00"});
    await ScheduleStop.create({"schedule_id": 12, "station_id": "ST07", "stop_order": 7, "arrival_time": "18:51:00"});
    await ScheduleStop.create({"schedule_id": 12, "station_id": "ST08", "stop_order": 8, "arrival_time": "18:58:00"});
    await ScheduleStop.create({"schedule_id": 12, "station_id": "ST09", "stop_order": 9, "arrival_time": "19:04:00"});
    await ScheduleStop.create({"schedule_id": 12, "station_id": "ST10", "stop_order": 10, "arrival_time": "19:11:00"});
    await ScheduleStop.create({"schedule_id": 12, "station_id": "ST11", "stop_order": 11, "arrival_time": "19:17:00"});
    await ScheduleStop.create({"schedule_id": 12, "station_id": "ST12", "stop_order": 12, "arrival_time": "19:23:00"});
    await ScheduleStop.create({"schedule_id": 12, "station_id": "ST13", "stop_order": 13, "arrival_time": "19:28:00"});

    await ScheduleStop.create({"schedule_id": 11, "station_id": "ST01", "stop_order": 1, "arrival_time": "17:35:00"});
    await ScheduleStop.create({"schedule_id": 11, "station_id": "ST02", "stop_order": 2, "arrival_time": "17:40:00"});
    await ScheduleStop.create({"schedule_id": 11, "station_id": "ST03", "stop_order": 3, "arrival_time": "17:47:00"});
    await ScheduleStop.create({"schedule_id": 11, "station_id": "ST04", "stop_order": 4, "arrival_time": "17:55:00"});
    await ScheduleStop.create({"schedule_id": 11, "station_id": "ST05", "stop_order": 5, "arrival_time": "18:01:00"});
    await ScheduleStop.create({"schedule_id": 11, "station_id": "ST06", "stop_order": 6, "arrival_time": "18:08:00"});
    await ScheduleStop.create({"schedule_id": 11, "station_id": "ST07", "stop_order": 7, "arrival_time": "18:17:00"});
    await ScheduleStop.create({"schedule_id": 11, "station_id": "ST08", "stop_order": 8, "arrival_time": "18:24:00"});
    await ScheduleStop.create({"schedule_id": 11, "station_id": "ST09", "stop_order": 9, "arrival_time": "18:30:00"});
    await ScheduleStop.create({"schedule_id": 11, "station_id": "ST10", "stop_order": 10, "arrival_time": "18:38:00"});
    await ScheduleStop.create({"schedule_id": 11, "station_id": "ST11", "stop_order": 11, "arrival_time": "18:45:00"});
    await ScheduleStop.create({"schedule_id": 11, "station_id": "ST12", "stop_order": 12, "arrival_time": "18:51:00"});
    await ScheduleStop.create({"schedule_id": 11, "station_id": "ST13", "stop_order": 13, "arrival_time": "18:56:00"});

    await ScheduleStop.create({"schedule_id": 13, "station_id": "ST01", "stop_order": 1, "arrival_time": "20:15:00"});
    await ScheduleStop.create({"schedule_id": 13, "station_id": "ST02", "stop_order": 2, "arrival_time": "20:20:00"});
    await ScheduleStop.create({"schedule_id": 13, "station_id": "ST03", "stop_order": 3, "arrival_time": "20:27:00"});
    await ScheduleStop.create({"schedule_id": 13, "station_id": "ST04", "stop_order": 4, "arrival_time": "20:36:00"});
    await ScheduleStop.create({"schedule_id": 13, "station_id": "ST05", "stop_order": 5, "arrival_time": "20:43:00"});
    await ScheduleStop.create({"schedule_id": 13, "station_id": "ST06", "stop_order": 6, "arrival_time": "20:50:00"});
    await ScheduleStop.create({"schedule_id": 13, "station_id": "ST07", "stop_order": 7, "arrival_time": "20:59:00"});
    await ScheduleStop.create({"schedule_id": 13, "station_id": "ST08", "stop_order": 8, "arrival_time": "21:06:00"});
    await ScheduleStop.create({"schedule_id": 13, "station_id": "ST09", "stop_order": 9, "arrival_time": "21:12:00"});
    await ScheduleStop.create({"schedule_id": 13, "station_id": "ST10", "stop_order": 10, "arrival_time": "21:19:00"});
    await ScheduleStop.create({"schedule_id": 13, "station_id": "ST11", "stop_order": 11, "arrival_time": "21:28:00"});
    await ScheduleStop.create({"schedule_id": 13, "station_id": "ST12", "stop_order": 12, "arrival_time": "21:34:00"});
    await ScheduleStop.create({"schedule_id": 13, "station_id": "ST13", "stop_order": 13, "arrival_time": "21:39:00"});

    await ScheduleStop.create({"schedule_id": 14, "station_id": "ST01", "stop_order": 1, "arrival_time": "21:20:00"});
    await ScheduleStop.create({"schedule_id": 14, "station_id": "ST02", "stop_order": 2, "arrival_time": "21:25:00"});
    await ScheduleStop.create({"schedule_id": 14, "station_id": "ST03", "stop_order": 3, "arrival_time": "21:32:00"});
    await ScheduleStop.create({"schedule_id": 14, "station_id": "ST04", "stop_order": 4, "arrival_time": "21:40:00"});
    await ScheduleStop.create({"schedule_id": 14, "station_id": "ST05", "stop_order": 5, "arrival_time": "21:47:00"});
    await ScheduleStop.create({"schedule_id": 14, "station_id": "ST06", "stop_order": 6, "arrival_time": "21:54:00"});
    await ScheduleStop.create({"schedule_id": 14, "station_id": "ST07", "stop_order": 7, "arrival_time": "22:03:00"});
    await ScheduleStop.create({"schedule_id": 14, "station_id": "ST08", "stop_order": 8, "arrival_time": "22:10:00"});
    await ScheduleStop.create({"schedule_id": 14, "station_id": "ST09", "stop_order": 9, "arrival_time": "22:17:00"});
    await ScheduleStop.create({"schedule_id": 14, "station_id": "ST10", "stop_order": 10, "arrival_time": "22:26:00"});
    await ScheduleStop.create({"schedule_id": 14, "station_id": "ST11", "stop_order": 11, "arrival_time": "22:32:00"});
    await ScheduleStop.create({"schedule_id": 14, "station_id": "ST12", "stop_order": 12, "arrival_time": "22:37:00"});
    await ScheduleStop.create({"schedule_id": 14, "station_id": "ST13", "stop_order": 13, "arrival_time": "22:42:00"});

    await ScheduleStop.create({"schedule_id": 15, "station_id": "ST01", "stop_order": 1, "arrival_time": "22:35:00"});
    await ScheduleStop.create({"schedule_id": 15, "station_id": "ST02", "stop_order": 2, "arrival_time": "22:40:00"});
    await ScheduleStop.create({"schedule_id": 15, "station_id": "ST03", "stop_order": 3, "arrival_time": "22:47:00"});
    await ScheduleStop.create({"schedule_id": 15, "station_id": "ST04", "stop_order": 4, "arrival_time": "22:56:00"});
    await ScheduleStop.create({"schedule_id": 15, "station_id": "ST05", "stop_order": 5, "arrival_time": "23:03:00"});
    await ScheduleStop.create({"schedule_id": 15, "station_id": "ST06", "stop_order": 6, "arrival_time": "23:10:00"});
    await ScheduleStop.create({"schedule_id": 15, "station_id": "ST07", "stop_order": 7, "arrival_time": "23:19:00"});
    await ScheduleStop.create({"schedule_id": 15, "station_id": "ST08", "stop_order": 8, "arrival_time": "23:26:00"});
    await ScheduleStop.create({"schedule_id": 15, "station_id": "ST09", "stop_order": 9, "arrival_time": "23:33:00"});
    await ScheduleStop.create({"schedule_id": 15, "station_id": "ST10", "stop_order": 10, "arrival_time": "23:41:00"});
    await ScheduleStop.create({"schedule_id": 15, "station_id": "ST11", "stop_order": 11, "arrival_time": "23:47:00"});
    await ScheduleStop.create({"schedule_id": 15, "station_id": "ST12", "stop_order": 12, "arrival_time": "23:54:00"});
    await ScheduleStop.create({"schedule_id": 15, "station_id": "ST13", "stop_order": 13, "arrival_time": "23:59:00"});

    // KRL
    await ScheduleStop.create({"schedule_id": 16, "station_id": "ST13", "stop_order": 1, "arrival_time": "05:00:00"});
    await ScheduleStop.create({"schedule_id": 16, "station_id": "ST12", "stop_order": 2, "arrival_time": "05:06:00"});
    await ScheduleStop.create({"schedule_id": 16, "station_id": "ST11", "stop_order": 3, "arrival_time": "05:13:00"});
    await ScheduleStop.create({"schedule_id": 16, "station_id": "ST10", "stop_order": 4, "arrival_time": "05:18:00"});
    await ScheduleStop.create({"schedule_id": 16, "station_id": "ST09", "stop_order": 5, "arrival_time": "05:26:00"});
    await ScheduleStop.create({"schedule_id": 16, "station_id": "ST08", "stop_order": 6, "arrival_time": "05:32:00"});
    await ScheduleStop.create({"schedule_id": 16, "station_id": "ST07", "stop_order": 7, "arrival_time": "05:39:00"});
    await ScheduleStop.create({"schedule_id": 16, "station_id": "ST06", "stop_order": 8, "arrival_time": "05:48:00"});
    await ScheduleStop.create({"schedule_id": 16, "station_id": "ST05", "stop_order": 9, "arrival_time": "05:55:00"});
    await ScheduleStop.create({"schedule_id": 16, "station_id": "ST04", "stop_order": 10, "arrival_time": "06:01:00"});
    await ScheduleStop.create({"schedule_id": 16, "station_id": "ST03", "stop_order": 11, "arrival_time": "06:10:00"});
    await ScheduleStop.create({"schedule_id": 16, "station_id": "ST02", "stop_order": 12, "arrival_time": "06:19:00"});
    await ScheduleStop.create({"schedule_id": 16, "station_id": "ST01", "stop_order": 13, "arrival_time": "06:24:00"});

    await ScheduleStop.create({"schedule_id": 17, "station_id": "ST13", "stop_order": 1, "arrival_time": "06:05:00"});
    await ScheduleStop.create({"schedule_id": 17, "station_id": "ST12", "stop_order": 2, "arrival_time": "06:11:00"});
    await ScheduleStop.create({"schedule_id": 17, "station_id": "ST11", "stop_order": 3, "arrival_time": "06:18:00"});
    await ScheduleStop.create({"schedule_id": 17, "station_id": "ST10", "stop_order": 4, "arrival_time": "06:23:00"});
    await ScheduleStop.create({"schedule_id": 17, "station_id": "ST09", "stop_order": 5, "arrival_time": "06:31:00"});
    await ScheduleStop.create({"schedule_id": 17, "station_id": "ST08", "stop_order": 6, "arrival_time": "06:37:00"});
    await ScheduleStop.create({"schedule_id": 17, "station_id": "ST07", "stop_order": 7, "arrival_time": "06:44:00"});
    await ScheduleStop.create({"schedule_id": 17, "station_id": "ST06", "stop_order": 8, "arrival_time": "06:53:00"});
    await ScheduleStop.create({"schedule_id": 17, "station_id": "ST05", "stop_order": 9, "arrival_time": "07:00:00"});
    await ScheduleStop.create({"schedule_id": 17, "station_id": "ST04", "stop_order": 10, "arrival_time": "07:06:00"});
    await ScheduleStop.create({"schedule_id": 17, "station_id": "ST03", "stop_order": 11, "arrival_time": "07:15:00"});
    await ScheduleStop.create({"schedule_id": 17, "station_id": "ST02", "stop_order": 12, "arrival_time": "07:25:00"});
    await ScheduleStop.create({"schedule_id": 17, "station_id": "ST01", "stop_order": 13, "arrival_time": "07:30:00"});

    await ScheduleStop.create({"schedule_id": 18, "station_id": "ST13", "stop_order": 1, "arrival_time": "07:15:00"});
    await ScheduleStop.create({"schedule_id": 18, "station_id": "ST12", "stop_order": 2, "arrival_time": "07:21:00"});
    await ScheduleStop.create({"schedule_id": 18, "station_id": "ST11", "stop_order": 3, "arrival_time": "07:27:00"});
    await ScheduleStop.create({"schedule_id": 18, "station_id": "ST10", "stop_order": 4, "arrival_time": "07:32:00"});
    await ScheduleStop.create({"schedule_id": 18, "station_id": "ST09", "stop_order": 5, "arrival_time": "07:40:00"});
    await ScheduleStop.create({"schedule_id": 18, "station_id": "ST08", "stop_order": 6, "arrival_time": "07:46:00"});
    await ScheduleStop.create({"schedule_id": 18, "station_id": "ST07", "stop_order": 7, "arrival_time": "07:53:00"});
    await ScheduleStop.create({"schedule_id": 18, "station_id": "ST06", "stop_order": 8, "arrival_time": "08:02:00"});
    await ScheduleStop.create({"schedule_id": 18, "station_id": "ST05", "stop_order": 9, "arrival_time": "08:09:00"});
    await ScheduleStop.create({"schedule_id": 18, "station_id": "ST04", "stop_order": 10, "arrival_time": "08:15:00"});
    await ScheduleStop.create({"schedule_id": 18, "station_id": "ST03", "stop_order": 11, "arrival_time": "08:24:00"});
    await ScheduleStop.create({"schedule_id": 18, "station_id": "ST02", "stop_order": 12, "arrival_time": "08:35:00"});
    await ScheduleStop.create({"schedule_id": 18, "station_id": "ST01", "stop_order": 13, "arrival_time": "08:40:00"});

    await ScheduleStop.create({"schedule_id": 19, "station_id": "ST13", "stop_order": 1, "arrival_time": "08:56:00"});
    await ScheduleStop.create({"schedule_id": 19, "station_id": "ST12", "stop_order": 2, "arrival_time": "09:02:00"});
    await ScheduleStop.create({"schedule_id": 19, "station_id": "ST11", "stop_order": 3, "arrival_time": "09:08:00"});
    await ScheduleStop.create({"schedule_id": 19, "station_id": "ST10", "stop_order": 4, "arrival_time": "09:13:00"});
    await ScheduleStop.create({"schedule_id": 19, "station_id": "ST09", "stop_order": 5, "arrival_time": "09:20:00"});
    await ScheduleStop.create({"schedule_id": 19, "station_id": "ST08", "stop_order": 6, "arrival_time": "09:26:00"});
    await ScheduleStop.create({"schedule_id": 19, "station_id": "ST07", "stop_order": 7, "arrival_time": "09:46:00"});
    await ScheduleStop.create({"schedule_id": 19, "station_id": "ST06", "stop_order": 8, "arrival_time": "09:55:00"});
    await ScheduleStop.create({"schedule_id": 19, "station_id": "ST05", "stop_order": 9, "arrival_time": "10:02:00"});
    await ScheduleStop.create({"schedule_id": 19, "station_id": "ST04", "stop_order": 10, "arrival_time": "10:08:00"});
    await ScheduleStop.create({"schedule_id": 19, "station_id": "ST03", "stop_order": 11, "arrival_time": "10:16:00"});
    await ScheduleStop.create({"schedule_id": 19, "station_id": "ST02", "stop_order": 12, "arrival_time": "10:23:00"});
    await ScheduleStop.create({"schedule_id": 19, "station_id": "ST01", "stop_order": 13, "arrival_time": "10:28:00"});

    await ScheduleStop.create({"schedule_id": 20, "station_id": "ST13", "stop_order": 1, "arrival_time": "10:40:00"});
    await ScheduleStop.create({"schedule_id": 20, "station_id": "ST12", "stop_order": 2, "arrival_time": "10:46:00"});
    await ScheduleStop.create({"schedule_id": 20, "station_id": "ST11", "stop_order": 3, "arrival_time": "10:52:00"});
    await ScheduleStop.create({"schedule_id": 20, "station_id": "ST10", "stop_order": 4, "arrival_time": "10:57:00"});
    await ScheduleStop.create({"schedule_id": 20, "station_id": "ST09", "stop_order": 5, "arrival_time": "11:04:00"});
    await ScheduleStop.create({"schedule_id": 20, "station_id": "ST08", "stop_order": 6, "arrival_time": "11:10:00"});
    await ScheduleStop.create({"schedule_id": 20, "station_id": "ST07", "stop_order": 7, "arrival_time": "11:17:00"});
    await ScheduleStop.create({"schedule_id": 20, "station_id": "ST06", "stop_order": 8, "arrival_time": "11:26:00"});
    await ScheduleStop.create({"schedule_id": 20, "station_id": "ST05", "stop_order": 9, "arrival_time": "11:33:00"});
    await ScheduleStop.create({"schedule_id": 20, "station_id": "ST04", "stop_order": 10, "arrival_time": "11:39:00"});
    await ScheduleStop.create({"schedule_id": 20, "station_id": "ST03", "stop_order": 11, "arrival_time": "11:47:00"});
    await ScheduleStop.create({"schedule_id": 20, "station_id": "ST02", "stop_order": 12, "arrival_time": "11:55:00"});
    await ScheduleStop.create({"schedule_id": 20, "station_id": "ST01", "stop_order": 13, "arrival_time": "12:00:00"});

    await ScheduleStop.create({"schedule_id": 21, "station_id": "ST13", "stop_order": 1, "arrival_time": "12:50:00"});
    await ScheduleStop.create({"schedule_id": 21, "station_id": "ST12", "stop_order": 2, "arrival_time": "12:56:00"});
    await ScheduleStop.create({"schedule_id": 21, "station_id": "ST11", "stop_order": 3, "arrival_time": "13:03:00"});
    await ScheduleStop.create({"schedule_id": 21, "station_id": "ST10", "stop_order": 4, "arrival_time": "13:08:00"});
    await ScheduleStop.create({"schedule_id": 21, "station_id": "ST09", "stop_order": 5, "arrival_time": "13:16:00"});
    await ScheduleStop.create({"schedule_id": 21, "station_id": "ST08", "stop_order": 6, "arrival_time": "13:22:00"});
    await ScheduleStop.create({"schedule_id": 21, "station_id": "ST07", "stop_order": 7, "arrival_time": "13:29:00"});
    await ScheduleStop.create({"schedule_id": 21, "station_id": "ST06", "stop_order": 8, "arrival_time": "13:38:00"});
    await ScheduleStop.create({"schedule_id": 21, "station_id": "ST05", "stop_order": 9, "arrival_time": "13:45:00"});
    await ScheduleStop.create({"schedule_id": 21, "station_id": "ST04", "stop_order": 10, "arrival_time": "13:52:00"});
    await ScheduleStop.create({"schedule_id": 21, "station_id": "ST03", "stop_order": 11, "arrival_time": "14:00:00"});
    await ScheduleStop.create({"schedule_id": 21, "station_id": "ST02", "stop_order": 12, "arrival_time": "14:08:00"});
    await ScheduleStop.create({"schedule_id": 21, "station_id": "ST01", "stop_order": 13, "arrival_time": "14:13:00"});

    await ScheduleStop.create({"schedule_id": 22, "station_id": "ST13", "stop_order": 1, "arrival_time": "13:43:00"});
    await ScheduleStop.create({"schedule_id": 22, "station_id": "ST12", "stop_order": 2, "arrival_time": "13:49:00"});
    await ScheduleStop.create({"schedule_id": 22, "station_id": "ST11", "stop_order": 3, "arrival_time": "13:55:00"});
    await ScheduleStop.create({"schedule_id": 22, "station_id": "ST10", "stop_order": 4, "arrival_time": "14:00:00"});
    await ScheduleStop.create({"schedule_id": 22, "station_id": "ST09", "stop_order": 5, "arrival_time": "14:07:00"});
    await ScheduleStop.create({"schedule_id": 22, "station_id": "ST08", "stop_order": 6, "arrival_time": "14:13:00"});
    await ScheduleStop.create({"schedule_id": 22, "station_id": "ST07", "stop_order": 7, "arrival_time": "14:20:00"});
    await ScheduleStop.create({"schedule_id": 22, "station_id": "ST06", "stop_order": 8, "arrival_time": "14:29:00"});
    await ScheduleStop.create({"schedule_id": 22, "station_id": "ST05", "stop_order": 9, "arrival_time": "14:36:00"});
    await ScheduleStop.create({"schedule_id": 22, "station_id": "ST04", "stop_order": 10, "arrival_time": "14:42:00"});
    await ScheduleStop.create({"schedule_id": 22, "station_id": "ST03", "stop_order": 11, "arrival_time": "14:50:00"});
    await ScheduleStop.create({"schedule_id": 22, "station_id": "ST02", "stop_order": 12, "arrival_time": "15:01:00"});
    await ScheduleStop.create({"schedule_id": 22, "station_id": "ST01", "stop_order": 13, "arrival_time": "15:06:00"});

    await ScheduleStop.create({"schedule_id": 23, "station_id": "ST13", "stop_order": 1, "arrival_time": "15:35:00"});
    await ScheduleStop.create({"schedule_id": 23, "station_id": "ST12", "stop_order": 2, "arrival_time": "15:41:00"});
    await ScheduleStop.create({"schedule_id": 23, "station_id": "ST11", "stop_order": 3, "arrival_time": "15:48:00"});
    await ScheduleStop.create({"schedule_id": 23, "station_id": "ST10", "stop_order": 4, "arrival_time": "15:53:00"});
    await ScheduleStop.create({"schedule_id": 23, "station_id": "ST09", "stop_order": 5, "arrival_time": "16:01:00"});
    await ScheduleStop.create({"schedule_id": 23, "station_id": "ST08", "stop_order": 6, "arrival_time": "16:07:00"});
    await ScheduleStop.create({"schedule_id": 23, "station_id": "ST07", "stop_order": 7, "arrival_time": "16:14:00"});
    await ScheduleStop.create({"schedule_id": 23, "station_id": "ST06", "stop_order": 8, "arrival_time": "16:23:00"});
    await ScheduleStop.create({"schedule_id": 23, "station_id": "ST05", "stop_order": 9, "arrival_time": "16:30:00"});
    await ScheduleStop.create({"schedule_id": 23, "station_id": "ST04", "stop_order": 10, "arrival_time": "16:36:00"});
    await ScheduleStop.create({"schedule_id": 23, "station_id": "ST03", "stop_order": 11, "arrival_time": "16:44:00"});
    await ScheduleStop.create({"schedule_id": 23, "station_id": "ST02", "stop_order": 12, "arrival_time": "16:52:00"});
    await ScheduleStop.create({"schedule_id": 23, "station_id": "ST01", "stop_order": 13, "arrival_time": "16:57:00"});

    await ScheduleStop.create({"schedule_id": 24, "station_id": "ST13", "stop_order": 1, "arrival_time": "18:05:00"});
    await ScheduleStop.create({"schedule_id": 24, "station_id": "ST12", "stop_order": 2, "arrival_time": "18:11:00"});
    await ScheduleStop.create({"schedule_id": 24, "station_id": "ST11", "stop_order": 3, "arrival_time": "18:19:00"});
    await ScheduleStop.create({"schedule_id": 24, "station_id": "ST10", "stop_order": 4, "arrival_time": "18:24:00"});
    await ScheduleStop.create({"schedule_id": 24, "station_id": "ST09", "stop_order": 5, "arrival_time": "18:31:00"});
    await ScheduleStop.create({"schedule_id": 24, "station_id": "ST08", "stop_order": 6, "arrival_time": "18:37:00"});
    await ScheduleStop.create({"schedule_id": 24, "station_id": "ST07", "stop_order": 7, "arrival_time": "18:44:00"});
    await ScheduleStop.create({"schedule_id": 24, "station_id": "ST06", "stop_order": 8, "arrival_time": "18:53:00"});
    await ScheduleStop.create({"schedule_id": 24, "station_id": "ST05", "stop_order": 9, "arrival_time": "19:00:00"});
    await ScheduleStop.create({"schedule_id": 24, "station_id": "ST04", "stop_order": 10, "arrival_time": "19:06:00"});
    await ScheduleStop.create({"schedule_id": 24, "station_id": "ST03", "stop_order": 11, "arrival_time": "19:14:00"});
    await ScheduleStop.create({"schedule_id": 24, "station_id": "ST02", "stop_order": 12, "arrival_time": "19:21:00"});
    await ScheduleStop.create({"schedule_id": 24, "station_id": "ST01", "stop_order": 13, "arrival_time": "19:26:00"});

    await ScheduleStop.create({"schedule_id": 25, "station_id": "ST13", "stop_order": 1, "arrival_time": "19:45:00"});
    await ScheduleStop.create({"schedule_id": 25, "station_id": "ST12", "stop_order": 2, "arrival_time": "19:51:00"});
    await ScheduleStop.create({"schedule_id": 25, "station_id": "ST11", "stop_order": 3, "arrival_time": "20:01:00"});
    await ScheduleStop.create({"schedule_id": 25, "station_id": "ST10", "stop_order": 4, "arrival_time": "20:06:00"});
    await ScheduleStop.create({"schedule_id": 25, "station_id": "ST09", "stop_order": 5, "arrival_time": "20:14:00"});
    await ScheduleStop.create({"schedule_id": 25, "station_id": "ST08", "stop_order": 6, "arrival_time": "20:20:00"});
    await ScheduleStop.create({"schedule_id": 25, "station_id": "ST07", "stop_order": 7, "arrival_time": "20:27:00"});
    await ScheduleStop.create({"schedule_id": 25, "station_id": "ST06", "stop_order": 8, "arrival_time": "20:36:00"});
    await ScheduleStop.create({"schedule_id": 25, "station_id": "ST05", "stop_order": 9, "arrival_time": "20:43:00"});
    await ScheduleStop.create({"schedule_id": 25, "station_id": "ST04", "stop_order": 10, "arrival_time": "20:49:00"});
    await ScheduleStop.create({"schedule_id": 25, "station_id": "ST03", "stop_order": 11, "arrival_time": "20:57:00"});
    await ScheduleStop.create({"schedule_id": 25, "station_id": "ST02", "stop_order": 12, "arrival_time": "21:05:00"});
    await ScheduleStop.create({"schedule_id": 25, "station_id": "ST01", "stop_order": 13, "arrival_time": "21:10:00"});

    await ScheduleStop.create({"schedule_id": 26, "station_id": "ST13", "stop_order": 1, "arrival_time": "20:42:00"});
    await ScheduleStop.create({"schedule_id": 26, "station_id": "ST12", "stop_order": 2, "arrival_time": "20:48:00"});
    await ScheduleStop.create({"schedule_id": 26, "station_id": "ST11", "stop_order": 3, "arrival_time": "20:54:00"});
    await ScheduleStop.create({"schedule_id": 26, "station_id": "ST10", "stop_order": 4, "arrival_time": "20:59:00"});
    await ScheduleStop.create({"schedule_id": 26, "station_id": "ST09", "stop_order": 5, "arrival_time": "21:06:00"});
    await ScheduleStop.create({"schedule_id": 26, "station_id": "ST08", "stop_order": 6, "arrival_time": "21:12:00"});
    await ScheduleStop.create({"schedule_id": 26, "station_id": "ST07", "stop_order": 7, "arrival_time": "21:19:00"});
    await ScheduleStop.create({"schedule_id": 26, "station_id": "ST06", "stop_order": 8, "arrival_time": "21:28:00"});
    await ScheduleStop.create({"schedule_id": 26, "station_id": "ST05", "stop_order": 9, "arrival_time": "21:35:00"});
    await ScheduleStop.create({"schedule_id": 26, "station_id": "ST04", "stop_order": 10, "arrival_time": "21:41:00"});
    await ScheduleStop.create({"schedule_id": 26, "station_id": "ST03", "stop_order": 11, "arrival_time": "21:49:00"});
    await ScheduleStop.create({"schedule_id": 26, "station_id": "ST02", "stop_order": 12, "arrival_time": "21:57:00"});
    await ScheduleStop.create({"schedule_id": 26, "station_id": "ST01", "stop_order": 13, "arrival_time": "22:02:00"});

    //KA PRAMEKS
    await ScheduleStop.create({"schedule_id": 27, "station_id": "ST01", "stop_order": 1, "arrival_time": "06:40:00"});
    await ScheduleStop.create({"schedule_id": 27, "station_id": "ST14", "stop_order": 2, "arrival_time": "07:07:00"});
    await ScheduleStop.create({"schedule_id": 27, "station_id": "ST16", "stop_order": 3, "arrival_time": "07:20:00"});
    await ScheduleStop.create({"schedule_id": 27, "station_id": "ST17", "stop_order": 4, "arrival_time": "07:29:00"});
    await ScheduleStop.create({"schedule_id": 27, "station_id": "ST18", "stop_order": 5, "arrival_time": "07:42:00"});

    await ScheduleStop.create({"schedule_id": 28, "station_id": "ST01", "stop_order": 1, "arrival_time": "11:50:00"});
    await ScheduleStop.create({"schedule_id": 28, "station_id": "ST14", "stop_order": 2, "arrival_time": "12:15:00"});
    await ScheduleStop.create({"schedule_id": 28, "station_id": "ST16", "stop_order": 3, "arrival_time": "12:28:00"});
    await ScheduleStop.create({"schedule_id": 28, "station_id": "ST17", "stop_order": 4, "arrival_time": "12:37:00"});
    await ScheduleStop.create({"schedule_id": 28, "station_id": "ST18", "stop_order": 5, "arrival_time": "12:50:00"});

    await ScheduleStop.create({"schedule_id": 29, "station_id": "ST01", "stop_order": 1, "arrival_time": "15:15:00"});
    await ScheduleStop.create({"schedule_id": 29, "station_id": "ST14", "stop_order": 2, "arrival_time": "15:42:00"});
    await ScheduleStop.create({"schedule_id": 29, "station_id": "ST16", "stop_order": 3, "arrival_time": "15:55:00"});
    await ScheduleStop.create({"schedule_id": 29, "station_id": "ST17", "stop_order": 4, "arrival_time": "16:04:00"});
    await ScheduleStop.create({"schedule_id": 29, "station_id": "ST18", "stop_order": 5, "arrival_time": "16:17:00"});

    await ScheduleStop.create({"schedule_id": 30, "station_id": "ST01", "stop_order": 1, "arrival_time": "16:20:00"});
    await ScheduleStop.create({"schedule_id": 30, "station_id": "ST14", "stop_order": 2, "arrival_time": "16:45:00"});
    await ScheduleStop.create({"schedule_id": 30, "station_id": "ST16", "stop_order": 3, "arrival_time": "16:58:00"});
    await ScheduleStop.create({"schedule_id": 30, "station_id": "ST17", "stop_order": 4, "arrival_time": "17:07:00"});
    await ScheduleStop.create({"schedule_id": 30, "station_id": "ST18", "stop_order": 5, "arrival_time": "17:20:00"});

    await ScheduleStop.create({"schedule_id": 31, "station_id": "ST01", "stop_order": 1, "arrival_time": "18:05:00"});
    await ScheduleStop.create({"schedule_id": 31, "station_id": "ST14", "stop_order": 2, "arrival_time": "18:29:00"});
    await ScheduleStop.create({"schedule_id": 31, "station_id": "ST16", "stop_order": 3, "arrival_time": "18:42:00"});
    await ScheduleStop.create({"schedule_id": 31, "station_id": "ST17", "stop_order": 4, "arrival_time": "18:51:00"});
    await ScheduleStop.create({"schedule_id": 31, "station_id": "ST18", "stop_order": 5, "arrival_time": "19:04:00"});

    // KA PRAMEKS
    await ScheduleStop.create({"schedule_id": 32, "station_id": "ST18", "stop_order": 1, "arrival_time": "05:10:00"});
    await ScheduleStop.create({"schedule_id": 32, "station_id": "ST17", "stop_order": 2, "arrival_time": "05:23:00"});
    await ScheduleStop.create({"schedule_id": 32, "station_id": "ST16", "stop_order": 3, "arrival_time": "05:32:00"});
    await ScheduleStop.create({"schedule_id": 32, "station_id": "ST14", "stop_order": 4, "arrival_time": "05:45:00"});
    await ScheduleStop.create({"schedule_id": 32, "station_id": "ST01", "stop_order": 5, "arrival_time": "06:10:00"});

    await ScheduleStop.create({"schedule_id": 33, "station_id": "ST18", "stop_order": 1, "arrival_time": "09:05:00"});
    await ScheduleStop.create({"schedule_id": 33, "station_id": "ST17", "stop_order": 2, "arrival_time": "09:19:00"});
    await ScheduleStop.create({"schedule_id": 33, "station_id": "ST16", "stop_order": 3, "arrival_time": "09:28:00"});
    await ScheduleStop.create({"schedule_id": 33, "station_id": "ST14", "stop_order": 4, "arrival_time": "09:41:00"});
    await ScheduleStop.create({"schedule_id": 33, "station_id": "ST01", "stop_order": 5, "arrival_time": "10:06:00"});

    await ScheduleStop.create({"schedule_id": 34, "station_id": "ST18", "stop_order": 1, "arrival_time": "13:19:00"});
    await ScheduleStop.create({"schedule_id": 34, "station_id": "ST17", "stop_order": 2, "arrival_time": "13:32:00"});
    await ScheduleStop.create({"schedule_id": 34, "station_id": "ST16", "stop_order": 3, "arrival_time": "13:41:00"});
    await ScheduleStop.create({"schedule_id": 34, "station_id": "ST14", "stop_order": 4, "arrival_time": "13:54:00"});
    await ScheduleStop.create({"schedule_id": 34, "station_id": "ST01", "stop_order": 5, "arrival_time": "14:19:00"});

    await ScheduleStop.create({"schedule_id": 35, "station_id": "ST18", "stop_order": 1, "arrival_time": "16:50:00"});
    await ScheduleStop.create({"schedule_id": 35, "station_id": "ST17", "stop_order": 2, "arrival_time": "17:03:00"});
    await ScheduleStop.create({"schedule_id": 35, "station_id": "ST16", "stop_order": 3, "arrival_time": "17:13:00"});
    await ScheduleStop.create({"schedule_id": 35, "station_id": "ST14", "stop_order": 4, "arrival_time": "17:28:00"});
    await ScheduleStop.create({"schedule_id": 35, "station_id": "ST01", "stop_order": 5, "arrival_time": "17:53:00"});

    await ScheduleStop.create({"schedule_id": 36, "station_id": "ST18", "stop_order": 1, "arrival_time": "18:45:00"});
    await ScheduleStop.create({"schedule_id": 36, "station_id": "ST17", "stop_order": 2, "arrival_time": "18:58:00"});
    await ScheduleStop.create({"schedule_id": 36, "station_id": "ST16", "stop_order": 3, "arrival_time": "19:07:00"});
    await ScheduleStop.create({"schedule_id": 36, "station_id": "ST14", "stop_order": 4, "arrival_time": "19:20:00"});
    await ScheduleStop.create({"schedule_id": 36, "station_id": "ST01", "stop_order": 5, "arrival_time": "19:45:00"});


    // KA BANDARA REGULER
    await ScheduleStop.create({"schedule_id": 37, "station_id": "ST01", "stop_order": 1, "arrival_time": "04:20:00"});
    await ScheduleStop.create({"schedule_id": 37, "station_id": "ST14", "stop_order": 2, "arrival_time": "04:46:00"});
    await ScheduleStop.create({"schedule_id": 37, "station_id": "ST15", "stop_order": 3, "arrival_time": "04:59:00"});
    
    await ScheduleStop.create({"schedule_id": 38, "station_id": "ST01", "stop_order": 1, "arrival_time": "05:10:00"});
    await ScheduleStop.create({"schedule_id": 38, "station_id": "ST14", "stop_order": 2, "arrival_time": "05:36:00"});
    await ScheduleStop.create({"schedule_id": 38, "station_id": "ST15", "stop_order": 3, "arrival_time": "05:49:00"});

    await ScheduleStop.create({"schedule_id": 39, "station_id": "ST01", "stop_order": 1, "arrival_time": "06:30:00"});
    await ScheduleStop.create({"schedule_id": 39, "station_id": "ST14", "stop_order": 2, "arrival_time": "06:56:00"});
    await ScheduleStop.create({"schedule_id": 39, "station_id": "ST15", "stop_order": 3, "arrival_time": "07:09:00"});

    await ScheduleStop.create({"schedule_id": 40, "station_id": "ST01", "stop_order": 1, "arrival_time": "08:33:00"});
    await ScheduleStop.create({"schedule_id": 40, "station_id": "ST14", "stop_order": 2, "arrival_time": "08:59:00"});
    await ScheduleStop.create({"schedule_id": 40, "station_id": "ST15", "stop_order": 3, "arrival_time": "09:12:00"});

    await ScheduleStop.create({"schedule_id": 41, "station_id": "ST01", "stop_order": 1, "arrival_time": "08:55:00"});
    await ScheduleStop.create({"schedule_id": 41, "station_id": "ST14", "stop_order": 2, "arrival_time": "09:21:00"});
    await ScheduleStop.create({"schedule_id": 41, "station_id": "ST15", "stop_order": 3, "arrival_time": "09:34:00"});

    await ScheduleStop.create({"schedule_id": 42, "station_id": "ST01", "stop_order": 1, "arrival_time": "12:00:00"});
    await ScheduleStop.create({"schedule_id": 42, "station_id": "ST14", "stop_order": 2, "arrival_time": "12:26:00"});
    await ScheduleStop.create({"schedule_id": 42, "station_id": "ST15", "stop_order": 3, "arrival_time": "12:39:00"});

    await ScheduleStop.create({"schedule_id": 43, "station_id": "ST01", "stop_order": 1, "arrival_time": "12:35:00"});
    await ScheduleStop.create({"schedule_id": 43, "station_id": "ST14", "stop_order": 2, "arrival_time": "13:01:00"});
    await ScheduleStop.create({"schedule_id": 43, "station_id": "ST15", "stop_order": 3, "arrival_time": "13:14:00"});

    await ScheduleStop.create({"schedule_id": 44, "station_id": "ST01", "stop_order": 1, "arrival_time": "14:13:00"});
    await ScheduleStop.create({"schedule_id": 44, "station_id": "ST14", "stop_order": 2, "arrival_time": "14:39:00"});
    await ScheduleStop.create({"schedule_id": 44, "station_id": "ST15", "stop_order": 3, "arrival_time": "14:52:00"});

    await ScheduleStop.create({"schedule_id": 45, "station_id": "ST01", "stop_order": 1, "arrival_time": "15:49:00"});
    await ScheduleStop.create({"schedule_id": 45, "station_id": "ST14", "stop_order": 2, "arrival_time": "16:15:00"});
    await ScheduleStop.create({"schedule_id": 45, "station_id": "ST15", "stop_order": 3, "arrival_time": "16:28:00"});

    await ScheduleStop.create({"schedule_id": 46, "station_id": "ST01", "stop_order": 1, "arrival_time": "16:07:00"});
    await ScheduleStop.create({"schedule_id": 46, "station_id": "ST14", "stop_order": 2, "arrival_time": "16:33:00"});
    await ScheduleStop.create({"schedule_id": 46, "station_id": "ST15", "stop_order": 3, "arrival_time": "16:46:00"});

    await ScheduleStop.create({"schedule_id": 47, "station_id": "ST01", "stop_order": 1, "arrival_time": "18:25:00"});
    await ScheduleStop.create({"schedule_id": 47, "station_id": "ST14", "stop_order": 2, "arrival_time": "18:51:00"});
    await ScheduleStop.create({"schedule_id": 47, "station_id": "ST15", "stop_order": 3, "arrival_time": "19:04:00"});

    await ScheduleStop.create({"schedule_id": 48, "station_id": "ST01", "stop_order": 1, "arrival_time": "19:16:00"});
    await ScheduleStop.create({"schedule_id": 48, "station_id": "ST14", "stop_order": 2, "arrival_time": "19:42:00"});
    await ScheduleStop.create({"schedule_id": 48, "station_id": "ST15", "stop_order": 3, "arrival_time": "19:55:00"});

    //KA BANDARA
    await ScheduleStop.create({"schedule_id": 49, "station_id": "ST15", "stop_order": 1, "arrival_time": "05:16:00"});
    await ScheduleStop.create({"schedule_id": 49, "station_id": "ST14", "stop_order": 2, "arrival_time": "05:31:00"});
    await ScheduleStop.create({"schedule_id": 49, "station_id": "ST01", "stop_order": 3, "arrival_time": "05:55:00"});

    await ScheduleStop.create({"schedule_id": 50, "station_id": "ST15", "stop_order": 1, "arrival_time": "06:20:00"});
    await ScheduleStop.create({"schedule_id": 50, "station_id": "ST14", "stop_order": 2, "arrival_time": "06:35:00"});
    await ScheduleStop.create({"schedule_id": 50, "station_id": "ST01", "stop_order": 3, "arrival_time": "06:59:00"});

    await ScheduleStop.create({"schedule_id": 51, "station_id": "ST15", "stop_order": 1, "arrival_time": "07:46:00"});
    await ScheduleStop.create({"schedule_id": 51, "station_id": "ST14", "stop_order": 2, "arrival_time": "08:01:00"});
    await ScheduleStop.create({"schedule_id": 51, "station_id": "ST01", "stop_order": 3, "arrival_time": "08:25:00"});

    await ScheduleStop.create({"schedule_id": 52, "station_id": "ST15", "stop_order": 1, "arrival_time": "09:53:00"});
    await ScheduleStop.create({"schedule_id": 52, "station_id": "ST14", "stop_order": 2, "arrival_time": "10:08:00"});
    await ScheduleStop.create({"schedule_id": 52, "station_id": "ST01", "stop_order": 3, "arrival_time": "10:32:00"});

    await ScheduleStop.create({"schedule_id": 53, "station_id": "ST15", "stop_order": 1, "arrival_time": "11:35:00"});
    await ScheduleStop.create({"schedule_id": 53, "station_id": "ST14", "stop_order": 2, "arrival_time": "11:50:00"});
    await ScheduleStop.create({"schedule_id": 53, "station_id": "ST01", "stop_order": 3, "arrival_time": "12:14:00"});

    await ScheduleStop.create({"schedule_id": 54, "station_id": "ST15", "stop_order": 1, "arrival_time": "13:25:00"});
    await ScheduleStop.create({"schedule_id": 54, "station_id": "ST14", "stop_order": 2, "arrival_time": "13:40:00"});
    await ScheduleStop.create({"schedule_id": 54, "station_id": "ST01", "stop_order": 3, "arrival_time": "14:04:00"});

    await ScheduleStop.create({"schedule_id": 55, "station_id": "ST15", "stop_order": 1, "arrival_time": "14:56:00"});
    await ScheduleStop.create({"schedule_id": 55, "station_id": "ST14", "stop_order": 2, "arrival_time": "15:11:00"});
    await ScheduleStop.create({"schedule_id": 55, "station_id": "ST01", "stop_order": 3, "arrival_time": "15:35:00"});

    await ScheduleStop.create({"schedule_id": 56, "station_id": "ST15", "stop_order": 1, "arrival_time": "15:20:00"});
    await ScheduleStop.create({"schedule_id": 56, "station_id": "ST14", "stop_order": 2, "arrival_time": "15:35:00"});
    await ScheduleStop.create({"schedule_id": 56, "station_id": "ST01", "stop_order": 3, "arrival_time": "15:59:00"});

    await ScheduleStop.create({"schedule_id": 57, "station_id": "ST15", "stop_order": 1, "arrival_time": "17:00:00"});
    await ScheduleStop.create({"schedule_id": 57, "station_id": "ST14", "stop_order": 2, "arrival_time": "17:15:00"});
    await ScheduleStop.create({"schedule_id": 57, "station_id": "ST01", "stop_order": 3, "arrival_time": "17:39:00"});
    
    await ScheduleStop.create({"schedule_id": 58, "station_id": "ST15", "stop_order": 1, "arrival_time": "17:34:00"});
    await ScheduleStop.create({"schedule_id": 58, "station_id": "ST14", "stop_order": 2, "arrival_time": "17:49:00"});
    await ScheduleStop.create({"schedule_id": 58, "station_id": "ST01", "stop_order": 3, "arrival_time": "18:13:00"});

    await ScheduleStop.create({"schedule_id": 59, "station_id": "ST15", "stop_order": 1, "arrival_time": "19:46:00"});
    await ScheduleStop.create({"schedule_id": 59, "station_id": "ST14", "stop_order": 2, "arrival_time": "20:01:00"});
    await ScheduleStop.create({"schedule_id": 59, "station_id": "ST01", "stop_order": 3, "arrival_time": "20:25:00"});

    await ScheduleStop.create({"schedule_id": 60, "station_id": "ST15", "stop_order": 1, "arrival_time": "20:55:00"});
    await ScheduleStop.create({"schedule_id": 60, "station_id": "ST14", "stop_order": 2, "arrival_time": "21:10:00"});
    await ScheduleStop.create({"schedule_id": 60, "station_id": "ST01", "stop_order": 3, "arrival_time": "21:34:00"});

    //KA BANDARA XPRESS
    await ScheduleStop.create({"schedule_id": 61, "station_id": "ST01", "stop_order": 1, "arrival_time": "06:00:00"});
    await ScheduleStop.create({"schedule_id": 61, "station_id": "ST15", "stop_order": 2, "arrival_time": "06:35:00"});

    await ScheduleStop.create({"schedule_id": 62, "station_id": "ST01", "stop_order": 1, "arrival_time": "07:40:00"});
    await ScheduleStop.create({"schedule_id": 62, "station_id": "ST15", "stop_order": 2, "arrival_time": "08:15:00"});

    await ScheduleStop.create({"schedule_id": 63, "station_id": "ST01", "stop_order": 1, "arrival_time": "07:57:00"});
    await ScheduleStop.create({"schedule_id": 63, "station_id": "ST15", "stop_order": 2, "arrival_time": "08:32:00"});

    await ScheduleStop.create({"schedule_id": 64, "station_id": "ST01", "stop_order": 1, "arrival_time": "09:28:00"});
    await ScheduleStop.create({"schedule_id": 64, "station_id": "ST15", "stop_order": 2, "arrival_time": "10:03:00"});

    await ScheduleStop.create({"schedule_id": 65, "station_id": "ST01", "stop_order": 1, "arrival_time": "09:51:00"});
    await ScheduleStop.create({"schedule_id": 65, "station_id": "ST15", "stop_order": 2, "arrival_time": "10:26:00"});

    await ScheduleStop.create({"schedule_id": 66, "station_id": "ST01", "stop_order": 1, "arrival_time": "11:03:00"});
    await ScheduleStop.create({"schedule_id": 66, "station_id": "ST15", "stop_order": 2, "arrival_time": "11:38:00"});

    await ScheduleStop.create({"schedule_id": 67, "station_id": "ST01", "stop_order": 1, "arrival_time": "13:28:00"});
    await ScheduleStop.create({"schedule_id": 67, "station_id": "ST15", "stop_order": 2, "arrival_time": "14:03:00"});

    await ScheduleStop.create({"schedule_id": 68, "station_id": "ST01", "stop_order": 1, "arrival_time": "15:02:00"});
    await ScheduleStop.create({"schedule_id": 68, "station_id": "ST15", "stop_order": 2, "arrival_time": "15:37:00"});

    await ScheduleStop.create({"schedule_id": 69, "station_id": "ST01", "stop_order": 1, "arrival_time": "15:30:00"});
    await ScheduleStop.create({"schedule_id": 69, "station_id": "ST15", "stop_order": 2, "arrival_time": "16:05:00"});

    await ScheduleStop.create({"schedule_id": 70, "station_id": "ST01", "stop_order": 1, "arrival_time": "16:48:00"});
    await ScheduleStop.create({"schedule_id": 70, "station_id": "ST15", "stop_order": 2, "arrival_time": "17:23:00"});

    await ScheduleStop.create({"schedule_id": 71, "station_id": "ST01", "stop_order": 1, "arrival_time": "17:15:00"});
    await ScheduleStop.create({"schedule_id": 71, "station_id": "ST15", "stop_order": 2, "arrival_time": "17:50:00"});

    await ScheduleStop.create({"schedule_id": 72, "station_id": "ST01", "stop_order": 1, "arrival_time": "18:50:00"});
    await ScheduleStop.create({"schedule_id": 72, "station_id": "ST15", "stop_order": 2, "arrival_time": "19:25:00"});

    await ScheduleStop.create({"schedule_id": 73, "station_id": "ST01", "stop_order": 1, "arrival_time": "20:12:00"});
    await ScheduleStop.create({"schedule_id": 73, "station_id": "ST15", "stop_order": 2, "arrival_time": "20:47:00"});

    //KA BANDARA XPRESS
    await ScheduleStop.create({"schedule_id": 74, "station_id": "ST15", "stop_order": 1, "arrival_time": "07:00:00"});
    await ScheduleStop.create({"schedule_id": 74, "station_id": "ST01", "stop_order": 2, "arrival_time": "07:35:00"});

    await ScheduleStop.create({"schedule_id": 75, "station_id": "ST15", "stop_order": 1, "arrival_time": "08:40:00"});
    await ScheduleStop.create({"schedule_id": 75, "station_id": "ST01", "stop_order": 2, "arrival_time": "09:15:00"});

    await ScheduleStop.create({"schedule_id": 76, "station_id": "ST15", "stop_order": 1, "arrival_time": "09:05:00"});
    await ScheduleStop.create({"schedule_id": 76, "station_id": "ST01", "stop_order": 2, "arrival_time": "09:40:00"});

    await ScheduleStop.create({"schedule_id": 77, "station_id": "ST15", "stop_order": 1, "arrival_time": "10:20:00"});
    await ScheduleStop.create({"schedule_id": 77, "station_id": "ST01", "stop_order": 2, "arrival_time": "10:55:00"});

    await ScheduleStop.create({"schedule_id": 78, "station_id": "ST15", "stop_order": 1, "arrival_time": "10:54:00"});
    await ScheduleStop.create({"schedule_id": 78, "station_id": "ST01", "stop_order": 2, "arrival_time": "11:29:00"});

    await ScheduleStop.create({"schedule_id": 79, "station_id": "ST15", "stop_order": 1, "arrival_time": "12:24:00"});
    await ScheduleStop.create({"schedule_id": 79, "station_id": "ST01", "stop_order": 2, "arrival_time": "12:59:00"});

    await ScheduleStop.create({"schedule_id": 80, "station_id": "ST15", "stop_order": 1, "arrival_time": "14:45:00"});
    await ScheduleStop.create({"schedule_id": 80, "station_id": "ST01", "stop_order": 2, "arrival_time": "15:20:00"});

    await ScheduleStop.create({"schedule_id": 81, "station_id": "ST15", "stop_order": 1, "arrival_time": "15:45:00"});
    await ScheduleStop.create({"schedule_id": 81, "station_id": "ST01", "stop_order": 2, "arrival_time": "16:20:00"});

    await ScheduleStop.create({"schedule_id": 82, "station_id": "ST15", "stop_order": 1, "arrival_time": "16:17:00"});
    await ScheduleStop.create({"schedule_id": 82, "station_id": "ST01", "stop_order": 2, "arrival_time": "16:52:00"});

    await ScheduleStop.create({"schedule_id": 83, "station_id": "ST15", "stop_order": 1, "arrival_time": "18:00:00"});
    await ScheduleStop.create({"schedule_id": 83, "station_id": "ST01", "stop_order": 2, "arrival_time": "18:35:00"});

    await ScheduleStop.create({"schedule_id": 84, "station_id": "ST15", "stop_order": 1, "arrival_time": "18:54:00"});
    await ScheduleStop.create({"schedule_id": 84, "station_id": "ST01", "stop_order": 2, "arrival_time": "19:29:00"});

    await ScheduleStop.create({"schedule_id": 85, "station_id": "ST15", "stop_order": 1, "arrival_time": "20:15:00"});
    await ScheduleStop.create({"schedule_id": 85, "station_id": "ST01", "stop_order": 2, "arrival_time": "20:50:00"});

    await ScheduleStop.create({"schedule_id": 86, "station_id": "ST15", "stop_order": 1, "arrival_time": "21:30:00"});
    await ScheduleStop.create({"schedule_id": 86, "station_id": "ST01", "stop_order": 2, "arrival_time": "22:05:00"});


    console.log("Seeding selesai.");
    await db.close();
  } catch (err) {
    console.error('Seeding gagal:', err);
  }
}

seed();