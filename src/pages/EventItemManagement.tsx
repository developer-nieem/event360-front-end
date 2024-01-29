import AddEvent from "@/components/EventItemManagement/AddEvent";
import EventList from "@/components/EventItemManagement/EventList";

const EventItemManagement = () => {
    return (
        <div>
            <div className="grid grid-cols-12 gap-6">
                <div className="col-span-12">
               
               <div className=" bg-slate-900 text-white p-5  m-3 rounded-lg">
                
               <AddEvent/>
              
               </div>
               <EventList/>
                
                </div>
           
         
            </div>
            
        </div>
    );
};

export default EventItemManagement;