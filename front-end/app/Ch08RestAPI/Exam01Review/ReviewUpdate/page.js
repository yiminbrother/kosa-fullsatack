"use client";

import { getReviewImageUrl, reviewDetail } from "@/apis/reviewApi";
import Image from "next/image";
import Link from "next/link";
import { useSearchParams } from "next/navigation";
import { useEffect, useRef, useState } from "react";

const fieldClass = "w-full rounded-xl border border-zinc-200 bg-white px-4 py-3 text-sm outline-none transition focus:border-orange-400 focus:ring-4 focus:ring-orange-100 disabled:bg-zinc-50 dark:border-zinc-700 dark:bg-zinc-900 dark:focus:ring-orange-950";

export default function ReviewUpdate() {
  const searchParams = useSearchParams();
  const reviewId = searchParams.get("reviewId");
  const [result, setResult] = useState(null);
  const [draft, setDraft] = useState({ title: "", content: "" });
  const [file, setFile] = useState(null);
  const [previewUrl, setPreviewUrl] = useState("");
  const [failedPreview, setFailedPreview] = useState("");
  const [removedFileId, setRemovedFileId] = useState(null);
  const removeFile = Boolean(reviewId && removedFileId === reviewId);
  const fileRef = useRef(null);
  const review = result?.id === reviewId ? result.review : null;
  const error = !reviewId ? "수정할 후기 번호가 없습니다." : result?.id === reviewId ? result.error : "";
  const loading = Boolean(reviewId && result?.id !== reviewId);
  const detailHref = reviewId
    ? { pathname: "/Ch08RestAPI/Exam01Review/ReviewDetail", query: { reviewId } }
    : "/Ch08RestAPI/Exam01Review";

  useEffect(() => {
    if (!reviewId) return;
    let active = true;
    reviewDetail(reviewId)
      .then(({ data }) => {
        if (!active) return;
        if (!data?.reviewId) throw new Error("후기 정보가 없습니다.");
        setDraft({ title: data.title || "", content: data.content || "" });
        setResult({ id: reviewId, review: data, error: "" });
      })
      .catch(() => {
        if (active) setResult({ id: reviewId, review: null, error: "후기를 불러오지 못했습니다. 목록에서 다시 선택해 주세요." });
      });
    return () => { active = false; };
  }, [reviewId]);

  useEffect(() => {
    if (!previewUrl) return;
    return () => URL.revokeObjectURL(previewUrl);
  }, [previewUrl]);

  const existingImage = !removeFile && review?.fileName && /\.(jpe?g|png|gif|webp|bmp|avif)$/i.test(review.fileName)
    ? getReviewImageUrl(review.reviewId) : "";
  const imageUrl = file ? (file.type.startsWith("image/") ? previewUrl : "") : existingImage;
  const fileName = file?.name || review?.fileName;

  return (
    <section className="min-w-0 overflow-hidden rounded-lg border border-zinc-200 bg-white text-zinc-900 shadow-sm dark:border-zinc-700 dark:bg-zinc-900 dark:text-zinc-100">
      <header className="border-b border-zinc-200 bg-zinc-100 px-4 py-1 dark:border-zinc-700 dark:bg-zinc-800">
        <h2 className="font-semibold">ReviewUpdate</h2>
      </header>
      <div className="bg-zinc-50/70 px-4 py-6 sm:p-8 dark:bg-zinc-950/40">
        <div className="mx-auto max-w-[800px]">
          <Link href={detailHref} className="text-xs font-medium text-zinc-500 transition-colors hover:text-orange-600">← {reviewId ? "후기로 돌아가기" : "목록으로 돌아가기"}</Link>
          <div className="mb-6 mt-5 flex items-start justify-between gap-4">
            <div>
              <p className="mb-2 text-xs font-semibold tracking-widest text-orange-600 dark:text-orange-400">EDIT REVIEW</p>
              <h3 className="text-2xl font-bold tracking-tight sm:text-3xl">후기를 다듬어 주세요</h3>
              <p className="mt-2 text-sm leading-6 text-zinc-500 dark:text-zinc-400">사용하며 새롭게 느낀 점을 더해 나만의 후기를 완성해 보세요.</p>
            </div>
            {reviewId && <span className="shrink-0 rounded-full border border-zinc-200 bg-white px-3 py-1 text-xs text-zinc-500 dark:border-zinc-700 dark:bg-zinc-800">후기 #{reviewId}</span>}
          </div>
          {loading && <p role="status" className="mb-4 rounded-xl border border-zinc-200 bg-white p-4 text-sm text-zinc-500 dark:border-zinc-700 dark:bg-zinc-900">후기를 불러오는 중입니다…</p>}
          {error && <p role="alert" className="mb-4 rounded-xl border border-red-200 bg-red-50 p-4 text-sm text-red-700 dark:border-red-900 dark:bg-red-950 dark:text-red-300">{error}</p>}
          <form onSubmit={(event) => event.preventDefault()} className="overflow-hidden rounded-2xl border border-zinc-200 bg-white shadow-sm dark:border-zinc-700 dark:bg-zinc-900">
            <div className="flex flex-wrap gap-x-8 gap-y-3 border-b border-zinc-100 bg-zinc-50/60 px-5 py-4 text-sm sm:px-6 dark:border-zinc-800 dark:bg-zinc-800/30">
              <p><span className="mr-2 text-zinc-400">작성자</span><span className="font-medium">{review?.writer || "—"}</span></p>
              <p><span className="mr-2 text-zinc-400">상품 번호</span><span className="font-medium">{review?.productId ?? "—"}</span></p>
              <p><span className="mr-2 text-zinc-400">작성일</span>{review?.writedAt ? new Date(review.writedAt).toLocaleDateString("ko-KR", { timeZone: "Asia/Seoul" }) : "—"}</p>
            </div>
            <fieldset disabled={!review || loading} className="space-y-6 p-5 sm:p-6">
              <legend className="sr-only">후기 수정</legend>
              <div>
                <div className="mb-2 flex items-center justify-between">
                  <label htmlFor="title" className="text-sm font-semibold">제목 <span className="text-orange-500">*</span></label>
                  <span className="text-xs tabular-nums text-zinc-400">{draft.title.length} / 200</span>
                </div>
                <input id="title" name="title" value={draft.title} onChange={(event) => setDraft({ ...draft, title: event.target.value })} maxLength={200} required placeholder="후기의 핵심을 한 줄로 담아 주세요" className={fieldClass} />
              </div>
              <div>
                <label htmlFor="content" className="mb-2 block text-sm font-semibold">후기 내용 <span className="text-orange-500">*</span></label>
                <textarea id="content" name="content" value={draft.content} onChange={(event) => setDraft({ ...draft, content: event.target.value })} required rows={9} placeholder="사용 경험과 좋았던 점, 아쉬웠던 점을 자유롭게 작성해 주세요." className={`${fieldClass} resize-y leading-7`} />
                <p className="mt-2 text-right text-xs tabular-nums text-zinc-400">{draft.content.length.toLocaleString("ko-KR")}자</p>
              </div>
              <div>
                <div className="grid grid-cols-1 gap-5 sm:grid-cols-2">
                <div className="flex min-w-0 flex-col">
                <p className="mb-2 text-sm font-semibold">현재 파일</p>
                <div className="flex flex-1 items-center gap-4 rounded-xl border border-zinc-200 bg-zinc-50/70 p-4 dark:border-zinc-700 dark:bg-zinc-800/30">
                  <div className="min-w-0 flex-1">
                    <p role="status" className="break-all text-sm font-medium">{removeFile ? "현재 파일을 삭제하도록 선택했습니다." : review?.fileName || "첨부된 파일이 없습니다."}</p>
                    {review?.fileName && (
                      <button type="button" onClick={() => setRemovedFileId(removeFile ? null : reviewId)} className="mt-3 rounded-lg border border-red-200 bg-red-50 px-3 py-1.5 text-xs font-semibold text-red-600 transition-colors hover:bg-red-100 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-red-500 dark:border-red-900 dark:bg-red-950/40 dark:text-red-400 dark:hover:bg-red-950">
                        {removeFile ? "삭제 취소" : "현재 파일 삭제"}
                      </button>
                    )}
                  </div>
                  {existingImage && failedPreview !== existingImage && <Image src={existingImage} alt={`현재 첨부파일: ${review.fileName}`} width={80} height={80} unoptimized onError={() => setFailedPreview(existingImage)} className="h-20 w-20 shrink-0 rounded-xl border border-zinc-200 bg-white object-contain dark:border-zinc-700" />}
                </div>
                </div>
                <div className="flex min-w-0 flex-col">
                <label htmlFor="file" className="mb-2 block text-sm font-semibold">첨부파일 변경 <span className="ml-1 font-normal text-zinc-400">선택</span></label>
                <div className="flex flex-1 items-center gap-4 rounded-xl border border-dashed border-zinc-300 bg-zinc-50/70 p-4 dark:border-zinc-600 dark:bg-zinc-800/30">
                  <div className="min-w-0 flex-1">
                    <p className="break-all text-sm font-medium">{file?.name || "변경할 파일을 선택해 주세요."}</p>
                    <p className="mt-1 text-xs leading-5 text-zinc-500">새 파일을 선택하면 기존 첨부파일을 대체합니다.</p>
                    <input ref={fileRef} id="file" name="file" type="file" onChange={(event) => { const selectedFile = event.target.files?.[0] || null; setFile(selectedFile); setPreviewUrl(selectedFile?.type.startsWith("image/") ? URL.createObjectURL(selectedFile) : ""); }} className="mt-3 block w-full min-w-0 text-xs text-zinc-500 file:mr-3 file:rounded-lg file:border file:border-zinc-200 file:bg-white file:px-3 file:py-2 file:font-semibold file:text-zinc-700 hover:file:bg-zinc-100 dark:file:border-zinc-600 dark:file:bg-zinc-800 dark:file:text-zinc-200" />
                    {file && <button type="button" onClick={() => { setFile(null); setPreviewUrl(""); fileRef.current.value = ""; }} className="mt-2 text-xs text-zinc-500 underline underline-offset-4 hover:text-zinc-900 dark:hover:text-white">새 파일 선택 취소</button>}
                  </div>
                  {file && imageUrl && failedPreview !== imageUrl && <Image src={imageUrl} alt={`첨부 미리보기: ${fileName}`} width={80} height={80} unoptimized onError={() => setFailedPreview(imageUrl)} className="h-20 w-20 shrink-0 rounded-xl border border-zinc-200 bg-white object-contain dark:border-zinc-700" />}
                </div>
              </div>
                </div>
                </div>
              </fieldset>
            <div className="border-t border-zinc-100 bg-zinc-50/50 p-5 sm:px-6 dark:border-zinc-800 dark:bg-zinc-800/20">
              <p id="save-help" className="mb-4 text-xs text-zinc-500 dark:text-zinc-400">수정 저장 기능은 준비 중입니다. 현재 입력 내용은 저장되지 않습니다.</p>
              <div className="flex justify-end gap-2">
                <Link href={detailHref} className="rounded-xl border border-zinc-200 bg-white px-5 py-2.5 text-sm font-semibold text-zinc-600 transition-colors hover:bg-zinc-100 dark:border-zinc-600 dark:bg-zinc-900 dark:text-zinc-300">취소</Link>
                <button type="submit" disabled aria-describedby="save-help" className="cursor-not-allowed rounded-xl bg-orange-500 px-5 py-2.5 text-sm font-semibold text-white opacity-50">수정 저장</button>
              </div>
            </div>
          </form>
        </div>
      </div>
    </section>
  );
}
