<script>
  import { getDatabase, ref, push } from "firebase/database";
  import Footer from "../components/Footer.svelte";
  import {
    getStorage,
    ref as refImage,
    uploadBytes,
    getDownloadURL,
  } from "firebase/storage";

  let title;
  let price;
  let description;
  let place;
  let files;

  // Create a root reference
  const storage = getStorage();
  const db = getDatabase();

  const uploadFiles = async () => {
    const file = files[0];
    const fileName = file.name;
    const imgRef = refImage(storage, fileName);
    await uploadBytes(imgRef, file);
    const url = await getDownloadURL(imgRef);
    return url;
  };

  function writeUserData(imgUrl) {
    push(ref(db, "items/"), {
      title,
      price,
      description,
      place,
      insertAt: new Date().getTime(),
      imgUrl,
    });
    window.location.hash = "/";
  }

  const handleSubmit = async () => {
    const url = await uploadFiles();
    writeUserData(url);
  };
</script>

<form id="write-form" action="POST" on:submit|preventDefault={handleSubmit}>
  <div class="write-form__title">내 물건 팔기</div>
  <div class="write-form__elem">
    <label>파일 업로드하기</label>
    <label for="image" class="label-upload">
      <div class="btn-upload">파일 업로드하기</div>
    </label>
    <input type="file" id="image" name="image" bind:files />
  </div>
  <div class="write-form__elem">
    <label for="title">제목</label>
    <input
      type="text"
      id="title"
      name="title"
      placeholder="제목"
      bind:value={title}
    />
  </div>
  <div class="write-form__elem">
    <label for="price">가격</label>
    <input
      type="number"
      id="price"
      name="price"
      placeholder="₩ 가격을 입력해 주세요."
      bind:value={price}
    />
  </div>
  <div class="write-form__elem">
    <label for="description">설명</label>
    <textarea
      id="description"
      name="description"
      placeholder="올릴 게시글 내용을 작성해주세요.&#13;&#10;(판매 금지 물품은 게시가 제한될 수 있어요.)"
      bind:value={description}
    />
  </div>
  <div class="write-form__elem">
    <label for="place">거래 희망 장소</label>
    <input type="text" id="place" name="place" bind:value={place} />
  </div>
  <button type="submit">저장</button>
</form>

<Footer location="write" />
