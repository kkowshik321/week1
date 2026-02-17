import React, { useState } from "react";

// ProfileCard Component (Child)
function ProfileCard(props) {
  return (
    <div style={{
      border: "2px solid #4CAF50",
      borderRadius: "10px",
      padding: "20px",
      margin: "10px",
      width: "300px",
      backgroundColor: "#f9f9f9",
      textAlign: "center",
      boxShadow: "2px 2px 10px gray"
    }}>
      <h2 style={{ color: "#333" }}>Profile Card</h2>

      <p style={{ fontSize: "18px" }}>
        <strong>Name:</strong> {props.name}
      </p>

      <p style={{ fontSize: "18px" }}>
        <strong>Role:</strong> {props.role}
      </p>
    </div>
  );
}


// StatusPanel Component (Child)
function StatusPanel(props) {

  function changeStatus() {
    props.updateStatus("Online");
  }

  function changeStatusOffline() {
    props.updateStatus("Offline");
  }

  return (
    <div style={{
      border: "2px solid #2196F3",
      borderRadius: "10px",
      padding: "20px",
      margin: "10px",
      width: "300px",
      backgroundColor: "#eef6ff",
      textAlign: "center",
      boxShadow: "2px 2px 10px gray"
    }}>

      <h2>Status Panel</h2>

      <p style={{
        fontSize: "18px",
        color: props.status === "Online" ? "green" : "red"
      }}>
        <strong>Status:</strong> {props.status}
      </p>

      <button
        onClick={changeStatus}
        style={{
          padding: "10px",
          margin: "5px",
          backgroundColor: "green",
          color: "white",
          border: "none",
          borderRadius: "5px",
          cursor: "pointer"
        }}>
        Set Online
      </button>

      <button
        onClick={changeStatusOffline}
        style={{
          padding: "10px",
          margin: "5px",
          backgroundColor: "red",
          color: "white",
          border: "none",
          borderRadius: "5px",
          cursor: "pointer"
        }}>
        Set Offline
      </button>

    </div>
  );
}


// Parent Component (App)
export default function App() {

  // React State (Single Source of Truth)
  const [user, setUser] = useState({
    name: "Kowshik",
    role: "Frontend Developer",
    status: "Offline"
  });


  // Function to update status
  function updateStatus(newStatus) {
    setUser({
      ...user,
      status: newStatus
    });
  }


  return (
    <div style={{
      textAlign: "center",
      padding: "30px",
      fontFamily: "Arial",
      backgroundColor: "#f0f2f5",
      minHeight: "100vh"
    }}>

      <h1 style={{ color: "#222" }}>
        Profile Dashboard
      </h1>

      {/* ProfileCard receives data from parent */}
      <ProfileCard
        name={user.name}
        role={user.role}
      />

      {/* StatusPanel receives data and function from parent */}
      <StatusPanel
        status={user.status}
        updateStatus={updateStatus}
      />

    </div>
  );
}
