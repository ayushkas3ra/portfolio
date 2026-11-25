export function Profile({ profile }) {
  return (
    <header className="profile entrance">
      <img
        className="profile__image"
        src={profile.image}
        alt={profile.imageAlt}
        width="112"
        height="112"
        fetchPriority="high"
      />
      <h1 className="profile__name">{profile.name || profile.title}</h1>
      {profile.name && <p className="profile__title">{profile.title}</p>}
      <p className="profile__introduction">{profile.introduction}</p>
    </header>
  )
}
