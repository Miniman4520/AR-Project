import dynamic from 'next/dynamic'; // Import the dynamic function

// Dynamically import the ARScene component, disabling Server-Side Rendering (SSR)
// This is the CRITICAL fix for deployment to Vercel/Next.js
const ARScene = dynamic(() => import('../components/ARScene'), {
  ssr: false, 
  loading: () => (
    <div className="text-center p-8">
      {/* This is what the user sees while the AR system loads */}
      <p>Initializing AR Object Detection Demo...</p>
      <p>Please allow camera access when prompted.</p>
    </div>
  ),
});

export default function Home() {
  // To make the AR scene full-screen and visible, we will remove most of 
  // the original boilerplate content (the Next.js logo, docs links, etc.).
  
  return (
    // The main container should be simple to give the AR scene full control
    // You can keep the `min-h-screen` from the old file to ensure full height.
    <div className="font-sans items-center justify-items-center min-h-screen">
      
      {/* Render the AR component, which will take over the screen */}
      <ARScene /> 

      {/* Note: All the previous content (Image, lists, buttons, footer) 
          has been removed from this file to focus on the AR experience. 
          If you need those, you can put them back outside the ARScene area. */}
          
    </div>
  );
}