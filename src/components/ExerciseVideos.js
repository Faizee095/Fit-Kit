import React from "react";

const ExerciseVideos = ({ exerciseVideos = [], name }) => (
  <section className="mt-16 sm:mt-20" aria-labelledby="videos-title">
    <div className="mb-6"><span className="text-xs font-extrabold uppercase tracking-[.18em] text-emerald-700">Watch and learn</span><h2 id="videos-title" className="mt-2 text-2xl font-black text-ink sm:text-3xl">{name} <span className="text-slate-400">video guides</span></h2></div>
    {exerciseVideos.length ? <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">{exerciseVideos.slice(0, 3).map((item) => <a key={item.video.videoId} className="group overflow-hidden rounded-3xl border border-slate-200 bg-white shadow-sm transition hover:-translate-y-1 hover:shadow-lg" href={`https://www.youtube.com/watch?v=${item.video.videoId}`} target="_blank" rel="noreferrer"><img className="aspect-video w-full object-cover transition group-hover:scale-[1.02]" src={item.video.thumbnails?.[0]?.url} alt={item.video.title} loading="lazy" /><div className="p-5"><h3 className="line-clamp-2 font-bold text-ink">{item.video.title}</h3><p className="mt-2 text-sm text-slate-500">{item.video.channelName}</p></div></a>)}</div> : <p className="rounded-2xl bg-white p-5 text-sm text-slate-500">No video guides are available for this exercise right now.</p>}
  </section>
);

export default ExerciseVideos;
