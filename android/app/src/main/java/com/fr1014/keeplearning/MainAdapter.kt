package com.fr1014.keeplearning

import android.content.Intent
import android.net.Uri
import android.view.LayoutInflater
import android.view.ViewGroup
import androidx.recyclerview.widget.RecyclerView
import com.fr1014.bean.SchemePortInfo
import com.fr1014.keeplearning.databinding.ItemContentViewBinding
import com.fr1014.rn.MODULE_NAME

/**
 * Create by fanrui07
 * Date: 2022/3/24
 * Describe:
 */
class MainAdapter(private val tvContentList: List<SchemePortInfo>) :
    RecyclerView.Adapter<MainAdapter.MainViewHolder>() {

    override fun onCreateViewHolder(parent: ViewGroup, viewType: Int): MainViewHolder {
        val binding = ItemContentViewBinding.inflate(LayoutInflater.from(parent.context), parent, false)
        return MainViewHolder(binding)
    }

    override fun onBindViewHolder(holder: MainViewHolder, position: Int) {
        val schemePortInfo = tvContentList[position]
        holder.binding.root.apply {
            text = schemePortInfo.name
            setBackgroundColor(
                if (position % 2 == 0)
                    context.getColor(R.color.ffab00)
                else
                    context.getColor(R.color.ffd600)
            )
            setOnClickListener {
                val intent = Intent()
                val host = context.getString(R.string.app_host)
                val scheme = context.getString(R.string.app_scheme);
                val uriString = "$scheme://$host:${schemePortInfo.port}"
                when (schemePortInfo.port) {
                    context.getString(R.string.port_activity_rn_wan_android) -> {
                        val moduleName = "WanAndroidPage"
                        intent.data = Uri.parse("${uriString}?${MODULE_NAME}=${moduleName}")
                    }
                    else -> {
                        intent.data = Uri.parse(uriString)
                    }
                }
                context.startActivity(intent)
            }
        }
    }

    override fun getItemCount() = tvContentList.size

    class MainViewHolder(val binding: ItemContentViewBinding) : RecyclerView.ViewHolder(binding.root)
}