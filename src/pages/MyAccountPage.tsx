import { useState, useEffect} from "react";
import Footer from "@/components/Footer/Footer";
import { Header } from "@/components/Header/Header";
import MainBanner from "@/components/MainBanner/MainBanner";
import { useUser } from "@/contexts/UserContext";
import Unauthorized from "./Unauthorized";
import { Loader } from "@/components/Loader/Loader";
import TextInput from "@/components/Inputs/TextInput";
import ButtonComponent from "@/components/Button/Button";
import { updateUser } from "@/services/users/updateUser";
import { UpdateUserDialog } from "@/components/UpdateUserDialog/UpdateUserDialog";

export const MyAccountPage = () => {
    const { user, isLoading, error } = useUser();
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
  
    const [dialogOpen, setDialogOpen] = useState(false);
    const [dialogTitle, setDialogTitle] = useState("");
    const [dialogDescription, setDialogDescription] = useState("");
  
    useEffect(() => {
      if (user) {
        setName(user.name || "");
        setEmail(user.email || "");
      }
    }, [user]);
  
    if (isLoading) return <Loader />;
    if (error) return <Unauthorized />;
  
    const handleSave = async () => {
        if (!user) return;
      
        try {
          await updateUser(user.id, name, email, user.account_id, user.role_id);
          setDialogTitle("Success!");
          setDialogDescription("Your changes have been saved successfully.");
          setDialogOpen(true);
        } catch (err) {
          setDialogTitle("Error!");
          setDialogDescription("Failed to save your changes.");
          setDialogOpen(true);
        }
      };
  
    return (
      <div className="flex flex-col items-center h-screen overflow-x-hidden">
        <Header user={user} />
        <div className="flex flex-col items-center justify-center gap-8 w-align flex-1 pb-20">
          <MainBanner title="My Account" />
          <div className="w-full max-w-xl flex flex-col gap-10 pt-10 pb-20">

            <TextInput
              id="name"
              label="Name"
              value={name}
              onChange={(e) => setName(e.target.value)}
              required
            />
            <TextInput
              id="email"
              label="Email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
            <ButtonComponent text="Save Changes" onClick={handleSave} />


          </div>
        </div>
        <Footer />
        <UpdateUserDialog
          open={dialogOpen}
          onOpenChange={(open) => {
            setDialogOpen(open);
            if (!open) {
              window.location.reload();
            }
          }}
          title={dialogTitle}
          description={dialogDescription}
        />
      </div>
    );
  };