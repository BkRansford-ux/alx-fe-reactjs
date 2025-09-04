function UserProfile(props) {
  return (
    <div style={{ border: '1px solid gray', padding: '15px', margin: '20px', borderRadius: '8px', backgroundColor: '#fafafa' }}>
      <h2 style={{ color: 'blue', marginBottom: '10px' }}>{props.name}</h2>
      <p>Age: <span style={{ fontWeight: 'bold', color: 'darkgreen' }}>{props.age}</span></p>
      <p style={{ fontStyle: 'italic' }}>Bio: {props.bio}</p>
    </div>
  );
}

export default UserProfile;
