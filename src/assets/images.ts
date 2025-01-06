// Extend the NodeRequire type to include `context`
declare const require: {
    context: (path: string, deep?: boolean, filter?: RegExp) => __WebpackModuleApi.RequireContext;
  };
  
  // Define the shape of your ImageMap
  type ImageMap = { [key: string]: string };
  
  // Function to import all images using require.context
  const importAll = (requireContext: __WebpackModuleApi.RequireContext): ImageMap => {
    const images: ImageMap = {};
    
    // Loop over each file in the context
    requireContext.keys().forEach((key) => {
      const name = key.replace("./", "").replace(/\.\w+$/, ""); // Remove './' and file extension
      const image = requireContext(key); // Get the module
      
      // Handle both default and non-default exports
      images[name] = image.default || image; 
    });
    
    return images;
  };
  
  // Import all images in the current directory and subdirectories with specific file extensions
  const images: ImageMap = importAll(require.context("./", true, /\.(png|jpe?g|svg)$/));
  
  export default images;
  