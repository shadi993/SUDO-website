import Team from "./components/team-members";

export const OurTeam = () => {
  useEffect(() => {
    document.title = "SUDO - Our Team";
  }, []);

  return (
    <>
      <Team />
    </>
  );
};
