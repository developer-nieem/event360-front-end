import { useGetEventItem } from "@/api/EventItem/useGetEventItem";
import { Table, TableBody,  TableCell,  TableHead, TableHeader, TableRow } from "../ui/table";
import { IEvents } from "@/type/events/events.type";
import { Edit } from "lucide-react";
import { Link } from "react-router-dom";
import RemoveEvent from "./RemoveEvent";

const EventList = () => {
   
    const {data , isLoading , isError} = useGetEventItem()

    if (isLoading) {
        return ;
      }
      if (isError) {
        return ;
      }

    return (
        <Table>
      <TableHeader>
        <TableRow>
          <TableHead>Name</TableHead>
          <TableHead>Image</TableHead>
          <TableHead className="text-right">Action</TableHead>
        </TableRow>
      </TableHeader>
      <TableBody>
        {data?.data.map((event : IEvents) => (
          <TableRow key={event._id}>
            <TableCell className="font-medium">{event.name} </TableCell>
            <TableCell> <img className="w-12 h-12 rounded-full" src={event.image} alt="" /> </TableCell>
            <TableCell className="text-right flex gap-5 justify-end">
              <Link to={`/admin/event-item-management/${event._id}`}> <Edit/>  </Link>
              
              <RemoveEvent id ={event._id} />
            
            </TableCell>
          </TableRow>
        ))}
      </TableBody>
    </Table>
    );
};

export default EventList;