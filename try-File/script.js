document.addEventListener("DOMContentLoaded", () => {
    const audioPlayer = document.getElementById("audioPlayer");
    const albumCover = document.getElementById("albumCover");
    const trackTitle = document.getElementById("trackTitle");
    const trackArtist = document.getElementById("trackArtist");
    const audio = document.getElementById("audio");
    const playBtn = document.getElementById("playBtn");
    const pauseBtn = document.getElementById("pauseBtn");
    const prevBtn = document.getElementById("prevBtn");
    const nextBtn = document.getElementById("nextBtn");
    const randomBtn = document.getElementById("randomBtn");
    const undoBtn = document.getElementById("undoBtn");
    const progress = document.getElementById("progress");
    const musicList = document.getElementById("musicList");

    let currentTrackIndex = 0;
    let tracks = [];
    let shuffledTracks = [];

    const fetchTracks = async () => {
        const response = await fetch("https://5dd1894f15bbc2001448d28e.mockapi.io/playlist");
        tracks = await response.json();
        shuffledTracks = [...tracks]; // Create a copy for shuffling
        renderMusicList();
        loadTrack(currentTrackIndex);
    };

    const loadTrack = (index) => {
        const track = tracks[index];
        albumCover.src = track.albumCover;
        trackTitle.innerText = track.track;
        trackArtist.innerText = track.artist;
        audio.src = track.file;
    };

    const renderMusicList = () => {
        musicList.innerHTML = tracks.map((track, index) => `
            <div class="music-item" onclick="playTrack(${index})">
                <img class="music-thumbnail" src="${track.albumCover}" alt="Album Cover">
                <div class="music-info">
                    <h4 class="music-title">${track.track}</h4>
                    <h6 class="music-artist">${track.artist}</h6>
                </div>
            </div>
        `).join('');
    };

    window.playTrack = (index) => {
        currentTrackIndex = index;
        loadTrack(currentTrackIndex);
        playAudio();
    };

    const playAudio = () => {
        audio.play();
        playBtn.style.display = "none";
        pauseBtn.style.display = "inline";
    };

    const pauseAudio = () => {
        audio.pause();
        playBtn.style.display = "inline";
        pauseBtn.style.display = "none";
    };

    playBtn.addEventListener("click", playAudio);
    pauseBtn.addEventListener("click", pauseAudio);

    prevBtn.addEventListener("click", () => {
        currentTrackIndex = (currentTrackIndex - 1 + tracks.length) % tracks.length;
        loadTrack(currentTrackIndex);
        playAudio();
    });

    nextBtn.addEventListener("click", () => {
        currentTrackIndex = (currentTrackIndex + 1) % tracks.length;
        loadTrack(currentTrackIndex);
        playAudio();
    });

    randomBtn.addEventListener("click", () => {
        shuffleTracks();
        currentTrackIndex = 0;
        loadTrack(currentTrackIndex);
        playAudio();
    });

    undoBtn.addEventListener("click", () => {
        // Implement logic to go back to the previous track, if possible
        if (currentTrackIndex > 0) {
            currentTrackIndex--;
            loadTrack(currentTrackIndex);
            playAudio();
        }
    });

    audio.addEventListener("timeupdate", () => {
        const progressPercent = (audio.currentTime / audio.duration) * 100;
        progress.style.width = `${progressPercent}%`;
    });

    const shuffleTracks = () => {
        for (let i = shuffledTracks.length - 1; i > 0; i--) {
            const j = Math.floor(Math.random() * (i + 1));
            [shuffledTracks[i], shuffledTracks[j]] = [shuffledTracks[j], shuffledTracks[i]];
        }
        tracks = [...shuffledTracks];
        renderMusicList();
    };

    fetchTracks();
});
//////////////////////////////////////////////////////
import { useState, useEffect } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { ChevronLeftIcon, ChevronRightIcon } from "@heroicons/react/24/solid";

const AdmindashBoard = () => {
  const [user, setUser] = useState([]);
  const [page, setPage] = useState(1);
  const [totalPage, setTotalPage] = useState(1);
  const [limit, setLimit] = useState(10);

  const [editUser, setEditUser] = useState({
    firstName: "",
    lastName: "",
    email: "",
    gender: "",
    role: "",
  });

  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [gender, setGender] = useState("");
  const [role, setRole] = useState("");

  const [editUserId, setEditUserId] = useState(null);
  const navigate = useNavigate();

  const fetchUser = async (pageNumber) => {
    const response = await axios.get(
      `http://localhost:7070/users?page=${pageNumber}&limit=${limit}`
    );
    setUser(response.data.users);
    setTotalPage(response.data.totalPages);
  };

  useEffect(() => {
    fetchUser(page);
  }, [page, limit]);

  const handleSubmit = async (e) => {
    e.preventDefault();

    await axios.post("http://localhost:7070/users/signup", {
      firstName,
      lastName,
      email,
      password,
      gender,
      role,
    });

    fetchUser(page);
  };

  const handleEdit = (user) => {
    setEditUserId(user._id);
    setEditUser({
      firstName: user.firstName,
      lastName: user.lastName,
      email: user.email,
      gender: user.gender,
      role: user.role,
    });
  };

  const handleUpdate = async (id) => {
    await axios.patch(`http://localhost:7070/users/${id}`, editUser);
    setEditUserId(null);
    fetchUser(page);
  };

  const handleDelete = async (id) => {
    await axios.delete(`http://localhost:7070/users/${id}`);
    fetchUser(page); 
  };

  const handleLogout = () => {
    localStorage.removeItem("token");
    navigate("/login");
  };

  return (
    <div>
      <button onClick={handleLogout}>LogOut</button>

      <h2 style={{ textAlign: "center" }}>Admin DashBoard</h2>

      <form onSubmit={handleSubmit}>
        <input value={firstName} onChange={(e) => setFirstName(e.target.value)} />
        <input value={lastName} onChange={(e) => setLastName(e.target.value)} />
        <input value={email} onChange={(e) => setEmail(e.target.value)} />
        <input value={password} onChange={(e) => setPassword(e.target.value)} />

        <select value={gender} onChange={(e) => setGender(e.target.value)} required>
          <option value="" disabled>Select gender</option>
          <option value="male">Male</option>
          <option value="female">Female</option>
        </select>

        <select value={role} onChange={(e) => setRole(e.target.value)}>
          <option value="user">user</option>
          <option value="admin">admin</option>
        </select>

        <button type="submit">Submit</button>
      </form>

      <table border="1">
        <thead>
          <tr>
            <th>First</th>
            <th>Last</th>
            <th>Email</th>
            <th>Gender</th>
            <th>Role</th>
            <th>Action</th>
          </tr>
        </thead>

        <tbody>
          {user.map((p) =>
            p.role !== "superadmin" ? (
              <tr key={p._id}>
                <td>
                  {editUserId === p._id ? (
                    <input
                      value={editUser.firstName}
                      onChange={(e) =>
                        setEditUser({ ...editUser, firstName: e.target.value })
                      }
                    />
                  ) : (
                    p.firstName
                  )}
                </td>

                <td>
                  {editUserId === p._id ? (
                    <input
                      value={editUser.lastName}
                      onChange={(e) =>
                        setEditUser({ ...editUser, lastName: e.target.value })
                      }
                    />
                  ) : (
                    p.lastName
                  )}
                </td>

                <td>
                  {editUserId === p._id ? (
                    <input
                      value={editUser.email}
                      onChange={(e) =>
                        setEditUser({ ...editUser, email: e.target.value })
                      }
                    />
                  ) : (
                    p.email
                  )}
                </td>

                <td>
                  {editUserId === p._id ? (
                    <input
                      value={editUser.gender}
                      onChange={(e) =>
                        setEditUser({ ...editUser, gender: e.target.value })
                      }
                    />
                  ) : (
                    p.gender
                  )}
                </td>

                <td>
                  {editUserId === p._id ? (
                    <input
                      value={editUser.role}
                      onChange={(e) =>
                        setEditUser({ ...editUser, role: e.target.value })
                      }
                    />
                  ) : (
                    p.role
                  )}
                </td>

                <td>
                  {editUserId === p._id ? (
                    <button onClick={() => handleUpdate(p._id)}>Save</button>
                  ) : (
                    <button onClick={() => handleEdit(p)}>Edit</button>
                  )}
                  <button onClick={() => handleDelete(p._id)}>Delete</button>
                </td>
              </tr>
            ) : null
          )}
        </tbody>
      </table>

      <select
        value={limit}
        onChange={(e) => setLimit(Number(e.target.value))} 
      >
        <option value={10}>10</option>
        <option value={25}>25</option>
        <option value={50}>50</option>
      </select>

      <button disabled={page === 1} onClick={() => setPage(page - 1)}>
        <ChevronLeftIcon width="15px" />
      </button>

      <span>Page {page} of {totalPage}</span>

      <button disabled={page === totalPage} onClick={() => setPage(page + 1)}>
        <ChevronRightIcon width="15px" />
      </button>
    </div>
  );
};

export default AdmindashBoard;
///////////////////////////////////////
{user
  .filter((p) => p.role !== "superadmin")
  .map((p) => (
    <tr key={p._id}>
      ...
    </tr>
  ))}
