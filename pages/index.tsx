import GradientLayout from '../components/gradientLayout';

export default function Home() {
  return (
    <GradientLayout
      roundImage
      color={"yellow"}
      title={"Max Pothier"}
      subtitle={"Profile"}
      description={"15 public playlists"}
      image={"/trax-girl.png"}
    >
      <div>home page</div>
    </GradientLayout>
  );
};
