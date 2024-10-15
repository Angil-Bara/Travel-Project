export function calculatePosition(lat, lon, radius) {
    var phi   = (90-lat)*(Math.PI/180);
    var theta = (lon+180)*(Math.PI/180);
  
    var x = -(radius * Math.sin(phi)*Math.cos(theta));
    var z = (radius * Math.sin(phi)*Math.sin(theta));
    var y = (radius * Math.cos(phi));
  
  
    return [x,y,z];
  
  }

// Function to calculate rotation for the cylinder
export function calculateRotation(lat, lon) {
    const phi = (90 - lat) * (Math.PI / 180);  // Polar angle
    const theta = (lon + 180) * (Math.PI / 180);  // Azimuthal angle
  
    // Rotation quaternion or Euler angles based on phi and theta
    const xRotation = Math.sin(phi) * Math.cos(theta);
    const yRotation = Math.sin(phi) * Math.sin(theta);
    const zRotation = Math.cos(phi);
  
    return [xRotation, yRotation, zRotation];
  } 
