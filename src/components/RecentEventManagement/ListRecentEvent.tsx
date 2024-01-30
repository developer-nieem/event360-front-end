import { Link } from "react-router-dom";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "../ui/table";
import { useGetRecentEvent } from "@/api/RecentEvent/useGetRecentEvent";
import { Edit } from "lucide-react";
import RemoveRecentEvent from "./RemoveRecentEvent";
import { IRecentEvent } from "@/type/recentEvent/recentEvent.type";



const ListRecentEvent = () => {

    const { data , isLoading , isError } = useGetRecentEvent()

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
            <TableHead>Event Name</TableHead>
            <TableHead>Organizer Name</TableHead>
            <TableHead>Image</TableHead>
            <TableHead className="text-right">Action</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {data?.data.map((event :IRecentEvent ) => (
            <TableRow key={event._id}>
              <TableCell className="font-medium">{event.eventName} </TableCell>
              <TableCell className="font-medium">by {event.organizerName} </TableCell>
              <TableCell> <img className="w-12 h-12 rounded-full" src={event.image} alt="" /> </TableCell>
              <TableCell className="text-right flex gap-5 justify-end">
                <Link to={`/admin/recent-event-management/${event._id}`}> <Edit/>  </Link>
                
                <RemoveRecentEvent id ={event._id} />
              
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    );
};

export default ListRecentEvent;