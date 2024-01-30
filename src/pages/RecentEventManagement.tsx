import AddRecentEvent from "@/components/RecentEventManagement/AddRecentEvent";
import ListRecentEvent from "@/components/RecentEventManagement/ListRecentEvent";

const RecentEventManagement = () => {
    return (
        <div>
            <div className="grid grid-cols-12 gap-6">
                <div className="col-span-12">
               
               <div className=" bg-slate-900 text-white p-5  m-3 rounded-lg">
                <AddRecentEvent/>
              
              
               </div>
               <ListRecentEvent/>
                
                </div>
           
         
            </div>
            
        </div>
    );
};

export default RecentEventManagement;