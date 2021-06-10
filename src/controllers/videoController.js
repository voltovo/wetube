let videos = [
  {
    title: "First Video",
    rating: 5,
    comments: 2,
    creatAt: "2 minutes ago",
    views: 59,
    id: 1,
  },
  {
    title: "Second Video",
    rating: 5,
    comments: 2,
    creatAt: "2 minutes ago",
    views: 59,
    id: 2,
  },
  {
    title: "Third Video",
    rating: 5,
    comments: 2,
    creatAt: "2 minutes ago",
    views: 59,
    id: 3,
  },
];
export const edit = (req, res) => res.send("Edit Video", { pageTitle: "Edit" });
export const see = (req, res) => {
  const { id } = req.params;
  const video = videos[id - 1];
  return res.render("watch", { pageTitle: `Watching ${video.title}`, video });
};
export const trending = (req, res) => {
  return res.render("home", { pageTitle: "Home", videos });
};

export const search = (req, res) => res.send("Search Video");
export const upload = (req, res) => res.send("Upload Video");
export const deleteVideo = (req, res) => res.send("Delete Video");
