export function Video() {
  return (
    <video
      className="w-full h-full object-cover"
      controls={false}
      autoPlay
      loop
      muted
      preload="none"
    >
      <source src="/bg-video.mp4" type="video/mp4" />
      Your browser does not support the video tag.
    </video>
  );
}
