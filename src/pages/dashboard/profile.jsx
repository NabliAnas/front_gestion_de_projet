import React, { useEffect, useState } from "react";
import {
  Card,
  CardBody,
  CardHeader,
  Avatar,
  Typography,
  Textarea,
  Input,
  Button,
} from "@material-tailwind/react";
import { getprofile, updateprofile } from "@/services/usersservices";
import { projectsData } from "@/data";
import swal from "sweetalert";
export function Profile() {
  const [profile, setProfile] = useState({});

  useEffect(() => {
    async function fetchProfile() {
      try {
        const response = await getprofile();
        setProfile(response);
      } catch (error) {
        console.error("Error fetching profile:", error);
      }
    }

    fetchProfile();
  }, []);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setProfile((prevProfile) => ({
      ...prevProfile,
      [name]: value,
    }));
  };

  const handleUpdate = async () => {
    try {
      await updateprofile(profile);
      swal("Bravo", "Profile updated successfully.", { icon: "success" });
    } catch (error) {
      console.error("Error updating profile:", error);
      swal("Erreur", "Une erreur s'est produite lors de la modification du profile.", { icon: "error" });
    }
  };

  return (
    <>
      <div className="relative mt-8 h-72 w-full overflow-hidden rounded-xl bg-[url('/img/background-image.png')] bg-cover bg-center">
        <div className="absolute inset-0 h-full w-full bg-gray-900/75" />
      </div>
      <Card className="mx-3 -mt-16 mb-6 lg:mx-4 border border-blue-gray-100">
        <CardBody className="p-4">
          <div className="mb-10 flex items-center justify-between flex-wrap gap-6">
            <div className="flex items-center gap-6">
              <Avatar
                src="/img/bruce-mars.jpeg"
                alt="bruce-mars"
                size="xl"
                variant="rounded"
                className="rounded-lg shadow-lg shadow-blue-gray-500/40"
              />
              <div>
                <Typography variant="h5" color="blue-gray" className="mb-1">
                  {profile.firstname} {profile.lastname}
                </Typography>
                <Typography variant="small" className="font-normal text-blue-gray-600">
                  {profile.username}
                </Typography>
              </div>
            </div>
            <div className="pr-8">
                <Button variant="outlined"  onClick={handleUpdate}>
                  Modifier
                </Button>
            </div>
            
          </div>
          <div className="grid grid-cols-1 gap-8 px-8 lg:grid-cols-2 xl:grid-cols-2">
            <div>
              <Typography variant="h6" color="blue-gray" className="mb-3">
                Profile Information
              </Typography>
              <div className="flex flex-col gap-6">
                <Input
                  name="id"
                  disabled
                  label="ID"
                  className="custom-input"
                  value={profile.id || ''}
                  onChange={handleInputChange}
                />
                <Input
                  name="firstname"
                  label="First Name"
                  className="custom-input"
                  value={profile.firstname || ''}
                  onChange={handleInputChange}
                />
                <Input
                  name="lastname"
                  label="Last Name"
                  className="custom-input"
                  value={profile.lastname || ''}
                  onChange={handleInputChange}
                />
                <Input
                  name="email"
                  label="Email"
                  className="custom-input"
                  value={profile.email || ''}
                  onChange={handleInputChange}
                />
              </div>
            </div>
            <div>
              <Typography variant="h6" color="blue-gray" className="mb-3">
                Profile Information
              </Typography>
              <div className="flex flex-col gap-6">
                <Input
                  name="city"
                  label="City"
                  className="custom-input"
                  value={profile.city || ''}
                  onChange={handleInputChange}
                />
                <Input
                  name="address"
                  label="Address"
                  className="custom-input"
                  value={profile.address || ''}
                  onChange={handleInputChange}
                />
                <Input
                  name="country"
                  label="Country"
                  className="custom-input"
                  value={profile.country || ''}
                  onChange={handleInputChange}
                />
                <Input
                  name="postal"
                  label="Postal Code"
                  className="custom-input"
                  value={profile.postal || ''}
                  onChange={handleInputChange}
                />
              </div>
            </div>
          </div>
          <div className="px-8 pt-8 pb-4">
            <Textarea
              name="about"
              className="custom-textarea"
              label="About Me"
              value={profile.about || ''}
              onChange={handleInputChange}
            />
          </div>
          <div className="px-4 pb-4">
            <Typography variant="h6" color="blue-gray" className="mb-2">
              Alexsys Solutions
            </Typography>
            <div className="mt-6 grid grid-cols-1 gap-12 md:grid-cols-2 xl:grid-cols-4">
              {projectsData.map(({ img, title, description }) => (
                <Card key={title} color="transparent" shadow={false}>
                  <CardHeader floated={false} color="gray" className="mx-0 mt-0 mb-4 h-64 xl:h-40">
                    <img src={img} alt={title} className="h-full w-full object-cover" />
                  </CardHeader>
                </Card>
              ))}
            </div>
          </div>
        </CardBody>
      </Card>
    </>
  );
}

export default Profile;
