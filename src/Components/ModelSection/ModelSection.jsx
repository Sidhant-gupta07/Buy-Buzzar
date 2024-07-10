import React from "react";
import { Button, Checkbox, Label, Modal, TextInput } from "flowbite-react";
import { useState } from "react";
import toast from "react-hot-toast";
const ModelSection = () => {
  const [openModal, setOpenModal] = useState(true);
  const [orderDetails, setOrderDetails] = useState({
    username: "",
    address: "",
    pincode: "",
    number: "",
  });

  function onCloseModal() {
    setOpenModal(false);
    setOrderDetails("");
  }

  const handleChange = (e) => {
    setOrderDetails({...orderDetails, [e.target.name]:e.target.value})
  }

  const handleOrder = (e) => {
    e.preventDefault();
    if (!orderDetails.username || !orderDetails.address || !orderDetails.pincode || !orderDetails.number) {
      return toast.error("All Fields are Required");
    } else {
      toast.success("order sucessfull")
      onCloseModal()
    }
  }

  return (
    <>
      <Button
        onClick={() => setOpenModal(true)}
        className="bg-indigo-500 font-semibold 
                hover:bg-indigo-600 py-1 text-sm text-white uppercase 
                w-full"
      >
        Checkout
      </Button>
      <Modal show={openModal} size="md" onClose={onCloseModal} popup>
        <Modal.Header />
        <Modal.Body>
          <div className="space-y-6">
            <h3 className="text-xl font-medium text-gray-900 dark:text-white">
              Checkout
            </h3>

            <div>
              <div className="mb-2 block">
                <Label htmlFor="username" value="Name" />
              </div>
              <TextInput 
              id="username" 
              placeholder="username"
              name="username"
              value={orderDetails.username}
              onChange={handleChange}
              required />
            </div>

            <div>
              <div className="mb-2 block">
                <Label htmlFor="address" value="Enter Full Address" />
              </div>
              <TextInput
                id="address"
                type="address"
                placeholder="address"
                name="address"
                value={orderDetails.address}
                onChange={handleChange}
                required
              />
            </div>

            <div>
              <div className="mb-2 block">
                <Label htmlFor="pincode" value="Pin Code" />
              </div>
              <TextInput
                id="pincode"
                type="pincode"
                placeholder="pincode"
                name="pincode"
                onChange={handleChange}
                value={orderDetails.pincode}
                required
              />
            </div>

            <div>
              <div className="mb-2 block">
                <Label htmlFor="Ph-number" value="Phone Number" />
              </div>
              <TextInput
                id="number"
                type="number"
                placeholder="mobile"
                name="number"
                value={orderDetails.number}
                onChange={handleChange}
                required
              />
            </div>

            <div className="flex justify-between">
              <div className="flex items-center gap-2">
                <Checkbox id="remember" />
                <Label htmlFor="remember">Remember me</Label>
              </div>
            </div>
            <div className="w-full">
              <Button className="w-full" onClick={handleOrder}>Order Now</Button>
            </div>
          </div>
        </Modal.Body>
      </Modal>
    </>
  );
};

export default ModelSection;
